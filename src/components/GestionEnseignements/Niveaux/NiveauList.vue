<template>

  <div class="flex flex-col h-screen">
    <!-- Enhanced Title Size -->
    <h1 class="text-center text-5xl font-bold my-4">Les Formations de l'année universitaire <br> {{this.anneeUniversitaire}} </h1>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col items-center justify-center">

      <div class="w-full max-w-6xl px-4">

        <!-- Search, Filter, and Button Row -->
        <div class="flex justify-between items-center mb-2">

          <div class="flex gap-2">
            <Search @update:query="searchQuery = $event" />
            <Filter :options="filterOptions" @update:filter="selectedFilter = $event" />
          </div>
          <button @click=createFormation() class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Nouvelle Formation</button>
        </div>

        <!-- Datagrid -->
        <div class="shadow-lg rounded-lg overflow-hidden">
          <Datagrid @click-row="handleClick" :headers="headers" :rows="filteredRows" actions>
            <!-- Scoped slot for row actions -->
            <template v-slot:row-actions="{ row }">
              <div class="flex items-center justify-center space-x-2"> <!-- Add this line -->
                <button @click.stop="addRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-red-500 transition duration-150">
                  <span class="material-symbols-outlined">
fork_left
</span>                </button>

                <button @click.stop="editRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-gray-700 transition duration-150">
                  <span class="material-icons">edit</span>
                </button>
                <button @click.stop="deleteRow(row)" class="flex items-center justify-center p-2 rounded text-gray-500 hover:text-red-500 transition duration-150">
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
      { text: 'Niveau', value: 'niveau' },
      { text: 'Date De Création', value: 'created_at' }

      ],
      anneeUniversitaire: '',
      anneeId: this.$route.params.anneeId,
      
      formations: [], // Ici seront stockées les données reçues de l'API
      searchQuery: '',
      selectedFilter: '',
      filterOptions: [
       { text: 'Niveau', value: 'niveau' },
        { text: 'Date De Création', value: 'created_at' }
      ],
    };
  },
  methods: {

    fetchAnneeUniversitaire() {

      const token = localStorage.getItem('userToken');
      axios.get(`${baseURL}/api/annee-universitaire/${this.anneeId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response.data);
         this.anneeUniversitaire =  `${response.data.annee_debut}/${response.data.annee_fin}`;         




        
      })
      .catch(error => console.error('Erreur lors de la récupération des niveaux de l\'année', error));


    },
    fetchFormations() {

      console.log(this.anneeId)
      const token = localStorage.getItem('userToken');
      axios.get(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response.data);
        this.formations = response.data.map(formation => ({
          ...formation,
          created_at: formation.created_at.split('T')[0], 



        }));
      })
      .catch(error => console.error('Erreur lors de la récupération des niveaux de l\'année', error));
    },
    createFormation() {
      this.$router.push({ name: 'CreateNiveau', params: { anneeId: this.anneeId } });
    },
    handleClick(row) {

       this.$router.push({ name: 'UEList', params: { formationId: this.anneeId, niveauId: row.id } }); 
    },
    addRow(row) {

      this.$router.push({ name: 'ParcoursList', params:  { formationId: this.anneeId, niveauId: row.id } });
    },
    deleteRow(row) {
  const confirmDelete = confirm(`Êtes-vous sûr de vouloir supprimer le niveau : ${row.niveau}  ?`);
  if (confirmDelete) {
    const token = localStorage.getItem('userToken');
    axios.delete(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/delete/${row.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(() => {
      alert('Niveau supprimée');
      this.fetchFormations(); 
    })
    .catch(error => {
      console.error('Erreur lors de la suppression du niveau :', error);
      alert('Échec de la suppression du niveau.');
    });
  }
},

  },
  computed: {
    filteredRows() {
      return this.formations.filter(formation => {
        const searchStr = this.searchQuery.toLowerCase();
        return Object.keys(formation).some(key =>
          String(formation[key]).toLowerCase().includes(searchStr)
        );
      });
    },
  },
  created() {
    this.fetchAnneeUniversitaire(); 

    this.fetchFormations(); // Appel de l'API au chargement du composant
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

