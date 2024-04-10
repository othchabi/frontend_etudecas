<template>

    <div class="flex flex-col h-screen">
      <!-- Enhanced Title Size -->
      <h1 class="text-center text-5xl font-bold my-4">Toutes les Années Universitaire :
      </h1>
  
      <!-- Main Content -->
      <main class="flex-1 flex flex-col items-center justify-center">
  
        <div class="w-full max-w-6xl px-4">
  
          <!-- Search, Filter, and Button Row -->
          <div class="flex justify-between items-center mb-2">
  
            <div class="flex gap-2">
              <Search @update:query="searchQuery = $event" />
              <Filter :options="filterOptions" @update:filter="selectedFilter = $event" />
            </div>
            <button @click=createAnneeUniversitaire() class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Nouvelle Année Universitaire</button>
          </div>
  
          
          <div class="shadow-lg rounded-lg overflow-hidden">

            <Datagrid @click-row="handleClick" :headers="headers" :rows="filteredRows" actions>

              <!-- Scoped slot for row actions -->
              <template v-slot:row-actions="{ row }">
                <div class="flex items-center justify-center space-x-2"> <!-- Add this line -->

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
  
          { text: 'Année Universitaire', value: 'annee_universitaire' },

        ],
        anneeUniversitaire: [], 
        searchQuery: '',
        selectedFilter: '',
        filterOptions: [
         { text: 'Année Universitaire', value: 'annee_universitaire' },
        ],
      };
    },
    methods: {
      fetchAnneesUniversitaire() {
        const token = localStorage.getItem('userToken');
        axios.get('http://localhost:8000/api/annee-universitaire', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data);
          this.anneeUniversitaire = response.data.map(anneeUniversitaire => ({
            ...anneeUniversitaire,
            annee_universitaire: `${anneeUniversitaire.annee_debut}/${anneeUniversitaire.annee_fin}`,            
            created_at: anneeUniversitaire.created_at ? anneeUniversitaire.created_at.split('T')[0] : "N/A",

          }));
        })
        .catch(error => console.error('Erreur lors de la récupération des formations:', error));
      },
      createAnneeUniversitaire() {
        this.$router.push({ name: 'CreateAnnee' });
      },
      handleClick(row) {
        console.log(row.id)
        this.$router.push({ name: 'NiveauList', params: { anneeId: row.id } });
      },
      editRow(row) {
        console.log(row.id)
      },
      deleteRow(row) {
    const confirmDelete = confirm(`Êtes-vous sûr de vouloir supprimer l'annee universitaire :  ${row.annee_universitaire}?`);
    if (confirmDelete) {
      const token = localStorage.getItem('userToken');
      axios.delete(`http://localhost:8000/api/annee-universitaire/delete/${row.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(() => {
        alert('Année supprimmée');
        this.fetchAnneesUniversitaire(); 
      })
      .catch(error => {
        console.error('Erreur lors de la suppression', error);
        alert('Échec de la suppression.');
      });
    }
  },
  
      // Autres méthodes si nécessaire...
    },
    computed: {
      filteredRows() {
        return this.anneeUniversitaire.filter(anneeUniversitaire => {
          const searchStr = this.searchQuery.toLowerCase();
          return Object.keys(anneeUniversitaire).some(key =>
            String(anneeUniversitaire[key]).toLowerCase().includes(searchStr)
          );
        });
      },
    },
    created() {
      this.fetchAnneesUniversitaire(); 
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
  
  