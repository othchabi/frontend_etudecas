<template>

  <div class="flex flex-col h-screen">
    <!-- Enhanced Title Size -->
    <h1 class="text-center text-5xl font-bold my-4">Les Parcours du <br> {{this.niveau}} </h1>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col items-center justify-center">

      <div class="w-full max-w-6xl px-4">

        <!-- Search, Filter, and Button Row -->
        <div class="flex justify-between items-center mb-2">

          <div class="flex gap-2">
            <Search @update:query="searchQuery = $event" />
            <Filter :options="filterOptions" @update:filter="selectedFilter = $event" />
          </div>
          <button @click=createFormation() class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Nouveau Parcours</button>
        </div>

        <!-- Datagrid -->
        <div class="shadow-lg rounded-lg overflow-hidden">
          <Datagrid :headers="headers" :rows="filteredRows" actions>
            <!-- Scoped slot for row actions -->
            <template v-slot:row-actions="{ row }">
              <div class="flex items-center justify-center space-x-2"> <!-- Add this line -->
                <button @click="editRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-gray-700 transition duration-150">
                  <span class="material-icons">edit</span>
                </button>
                <button @click="deleteRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-red-500 transition duration-150">
                  <span class="material-icons">delete</span>
                </button>
              </div> <!-- Close the div here -->
            </template>
          </Datagrid>
        </div>
      </div>
    </main>
  </div>
</template>


  
<script>
import axios from 'axios';
import Datagrid from '../../~shared/Datagrid/Datagrid.vue';
import Search from '../../~shared/Datagrid/Search.vue';
import Filter from '../../~shared/Datagrid/Filter.vue';
import { baseURL } from '../../../baseUrl';
export default {
  components: {
    Datagrid,
    Search,
    Filter,
  },
  data() {
    return {
      // Définition des en-têtes adaptées aux données reçues de l'API
      headers: [
      { text: 'Nom', value: 'nom' },
      { text: 'Date De Création', value: 'created_at' }

      ],
      niveau: '',
      anneeId: this.$route.params.anneeId,
      niveauId: this.$route.params.niveauId,
      parcours: [], 
      searchQuery: '',
      selectedFilter: '',
      filterOptions: [
       { text: 'Nom', value: 'nom' },
        { text: 'Date De Création', value: 'created_at' }
      ],
    };
  },
  methods: {

    fetchNiveau() {

      const token = localStorage.getItem('userToken');
      axios.get(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response.data);
        this.niveau =  `${response.data.niveau} - ${response.data.annee_universitaire.annee_debut}/${response.data.annee_universitaire.annee_fin}`;         

      })
      .catch(error => console.error('Erreur lors de la récupération des parcours de l\'année', error));


    },
    fetchParcours() {

      const token = localStorage.getItem('userToken');
      axios.get(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/parcours`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response.data);
        this.parcours = response.data.map(parcours => ({
          ...parcours,
          created_at: parcours.created_at.split('T')[0], 

        }));
      })
      .catch(error => console.error('Erreur lors de la récupération des parcours de l\'année', error));
    },
    createFormation() {
      this.$router.push({ name: 'CreateParcours', params: { anneeId: this.anneeId } });
    },
    handleClick(row) {
      console.log("parcours", row.id)
      /* this.$router.push({ name: 'DetailsFormation', params: { formationId: row.id } }); */
    },
    addRow(row) {
      this.$router.push({ name: 'ListUEs', params: { formationId: row.id } });
    },
    deleteRow(row) {
  const confirmDelete = confirm(`Êtes-vous sûr de vouloir supprimer le parcours : ${row.nom}  ?`);
  if (confirmDelete) {
    const token = localStorage.getItem('userToken');
    axios.delete(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/parcours/delete/${row.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(() => {
      alert('Parcours supprimée');
      this.fetchParcours(); 
    })
    .catch(error => {
      console.error('Erreur lors de la suppression du parcours :', error);
      alert('Échec de la suppression du parcours.');
    });
  }
},

  },
  computed: {
    filteredRows() {
      return this.parcours.filter(parcours => {
        const searchStr = this.searchQuery.toLowerCase();
        return Object.keys(parcours).some(key =>
          String(parcours[key]).toLowerCase().includes(searchStr)
        );
      });
    },
  },
  created() {
    this.fetchNiveau(); 

    this.fetchParcours(); 
  },
};
</script>


  
<style scoped>
.datagrid-container {
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  height: 100vh;
  width: 100vw;
}

.controls-container {
  width: 100%; 
  display: flex;
  justify-content: center; 
  margin-bottom: 1rem; 
}



.controls {
  display: flex;
  gap: 1rem;
 
}

Datagrid {
  width: 600px; /* Fixed width */
  height: auto; /* Adjust based on content, or set a fixed height */
  max-height: 400px; /* Optional: set a max height for the Datagrid */
  overflow: auto; /* Scrollbars if content overflows */
}

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

