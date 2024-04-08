  <template>
      <div class="flex flex-col h-screen">
        <h1 class="text-center text-5xl font-bold my-4">Demandes d'inscription en attente</h1>
        <main class="flex-1 flex flex-col items-center justify-center">
          <div class="w-full max-w-6xl px-4">
            <div class="flex justify-between items-center mb-2">
              <div class="flex gap-2">
                <Search @update:query="searchQuery = $event" />
                <Filter :options="filterOptions" @update:filter="selectedFilter = $event" />
              </div>
            </div>
            <div class="shadow-lg rounded-lg overflow-hidden">
              <Datagrid :headers="headers" :rows="filteredRequests" actions>
                <template v-slot:row-actions="{ row }">
                  <div class="flex items-center justify-center space-x-2">
                    <button @click="activateUser(row.id)" class="icon-button">
                      <span class="material-icons">check_circle</span>
                    </button>
                    <button @click="rejectUser(row.id)" class="icon-button">
                      <span class="material-icons">cancel</span>
                    </button>
                  </div>
                </template>
              </Datagrid>
            </div>
          </div>
        </main>
      </div>
    </template>
    
    
    <script>
    import Datagrid from '../~shared/Datagrid/Datagrid.vue';
    import Search from '../~shared/Datagrid/Search.vue';
    import Filter from '../~shared/Datagrid/Filter.vue';
    import axios from 'axios'; // Make sure axios is imported
    import { baseURL } from '../../baseUrl';
    
    export default {
      components: {
        Datagrid,
        Search,
        Filter
      },
      data() {
        return {
          searchQuery: '',
          selectedFilter: '',
          filterOptions: [{ text: 'Nom', value: 'nom' },
          { text: 'Prénom', value: 'prenom' },
          { text: 'Email', value: 'email' },
          { text: 'Rôles', value: 'roles' },
          { text: "Date d\'inscription ", value: 'inscriptionDate' },
          ],
          
          headers: [{ text: 'Nom', value: 'nom' },
          { text: 'Prénom', value: 'prenom' },
          { text: 'Email', value: 'email' },
          { text: 'Rôles', value: 'roles' },
          { text: "Date d\'inscription ", value: 'inscriptionDate' },
          ],
          requests: [] 
        };
      },
      computed: {
        filteredRequests() {
      return this.requests.filter(request => {
        if (!this.searchQuery) return true;
        const field = this.selectedFilter ? request[this.selectedFilter].toString().toLowerCase() : request['email'].toString().toLowerCase();
        return field.includes(this.searchQuery.toLowerCase());
      });
    }

      },
      methods: {
      nameById(id){
        const rolesMap = {
      1: 'Enseignant',
      2: 'Responsable année',
      3: 'Responsable master',
      4: 'Administrateur',
    };
    
    return rolesMap[id]
      },
      fetchInactiveUsers() {
        const token = localStorage.getItem('userToken');
        axios.get(`${baseURL}/api/inactive-users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          this.requests = response.data.map(user => ({
            ...user,
            roles: user.roles.map(role => this.nameById(role.id)).join(', '), 
            inscriptionDate: user.created_at.split("T")[0]
          }));
          console.log(this.requests)
        })
        .catch(error => {
          console.error('There was an error fetching the inactive users:', error);
        });
      },
      activateUser(userId) {
    const token = localStorage.getItem('userToken');
    axios.post(`${baseURL}/api/user/activate/${userId}`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      this.fetchInactiveUsers(); 
      console.log(`User ${userId} activated.`);
    })
    .catch(error => {
      console.error('Error activating user:', error);
    });
  },
  rejectUser(userId) {
    const token = localStorage.getItem('userToken');
    console.log(token);
    axios.post(`${baseURL}/api/user/delete/${userId}`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      this.fetchInactiveUsers();
      console.log(`User ${userId} deleted.`);
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
  }
      },
      created() {
      this.fetchInactiveUsers();
    }
    }
    </script>
    
    <style scoped>
    .icon-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    </style>
    