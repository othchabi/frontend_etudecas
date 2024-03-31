<template>
    <div class="flex flex-col h-screen">
      <h1 class="text-center text-5xl font-bold my-4">Tous Les Utilisateurs</h1>
      <main class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-6xl px-4">
          <div class="flex justify-between items-center mb-2">
            <div class="flex gap-2">
              <Search @update:query="searchQuery = $event" />
              <Filter :options="filterOptions" @update:filter="selectedFilter = $event" />
            </div>
            <button @click="() => navigateTo('CreateUser')" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Nouveau Utilisateur</button>
          </div>
          <div class="shadow-lg rounded-lg overflow-hidden">
            <Datagrid :headers="headers" :rows="filteredRequests" actions>
              <template v-slot:row-actions="{ row }">
                <div class="flex items-center justify-center space-x-2">

                <button @click="() => navigateTo('EditUser', { userId: row.id })" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-gray-700 transition duration-150">
                  <span class="material-icons">edit</span>
                </button>
                <button @click="deleteRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-red-500 transition duration-150">
                  <span class="material-icons">delete</span>
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
  import axios from 'axios'
  import { useRouter } from 'vue-router';
import { baseURL } from '../../baseUrl';
   const router = useRouter();;

  
  export default {
    components: {
      Datagrid,
      Search,
      Filter,
    },
    data() {
      return {
        searchQuery: '',
        selectedFilter: '',
        filterOptions: [
          { text: 'Nom', value: 'nom' },
          { text: 'Prénom', value: 'prenom' },
          {text: 'Nom d\'utilisateur', value: 'username'},
          { text: 'Email', value: 'email' },
          { text: 'Rôles', value: 'roles' },
          { text: "Date d'inscription", value: 'created_at' },
        ],
        headers: [
          { text: 'Nom', value: 'nom' },
          { text: 'Prénom', value: 'prenom' },
          {text: 'Nom d\'utilisateur', value: 'username'},
          { text: 'Email', value: 'email' },
          { text: 'Rôles', value: 'roles' },
          { text: "Date d'inscription", value: 'created_at' },
        ],
        requests: [],
      };
    },
    computed: {
      filteredRequests() {
        return this.requests.filter(request => {
          if (!this.searchQuery) return true;
          const field = this.selectedFilter ? request[this.selectedFilter].toString().toLowerCase() : request['email'].toString().toLowerCase();
          return field.includes(this.searchQuery.toLowerCase());
        });
      },
    },
    methods: {

      navigateTo(routeName, params = {}) {
    this.$router.push({ name: routeName, params });
  },
      nameById(id) {
        const rolesMap = {
          1: 'Enseignant',
          2: 'Responsable année',
          3: 'Responsable master',
          4: 'Administrateur',
        };
  
        return rolesMap[id];
      },
      fetchAllUsers() {
        const token = localStorage.getItem('userToken');
        console.log(token)

        axios.get(`${baseURL}/api/users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(response => {
          this.requests = response.data.map(user => ({
            ...user,
            roles: user.roles.map(role => this.nameById(role.id)).join(', '),
            inscriptionDate: user.created_at.split("T")[0],
          }));
          console.log(this.requests);
        })
        .catch(error => {
          console.error('There was an error fetching all users:', error);
        });
      },
      deleteRow(row) {
        const token = localStorage.getItem('userToken'); 
          console.log(token, row.id)

        axios.delete(`${baseURL}/api/user/delete/${row.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(response => {
          this.fetchAllUsers(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the user:', error);
        });
      },
    },
    created() {
      this.fetchAllUsers();
    },
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
  