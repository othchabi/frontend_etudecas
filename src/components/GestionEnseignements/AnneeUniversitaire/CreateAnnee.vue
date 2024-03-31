<template>
    <div class="flex flex-col h-screen">
      <h1 class="text-center text-5xl font-bold my-4">Créer une Nouvelle Année Universitaire</h1>
      <main class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-6xl px-4">
          <div class="shadow-lg rounded-lg overflow-hidden p-8">
            <form @submit.prevent="createAnnee" class="flex flex-col gap-6">
  
              <h2 class="text-lg font-semibold">Année Universitaire</h2>
              <input type="text" v-model="form.annee" placeholder="N/N+1" class="input" required>
  

              <select v-model="form.selectedAnneeId" @change="onAnneeSelect" class="input">
  <option disabled value="">A partir d'une année universitaire</option>
  <option v-for="annee in anneesUniversitaires" :key="annee.id" :value="annee.id">
    {{ annee.annee_universitaire }}
  </option>
</select>

              <button type="submit" class="btn">Créer Année Universitaire</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import { baseURL } from '../../../baseUrl';
  export default {
    data() {
      return {
        form: {
          annee: '',
          selectedAnneeId: '', // Store the selected existing year's ID
    },
    anneesUniversitaires: [], // To store fetched years

      };
    },

    created() {
  this.fetchAnneesUniversitaires();
},

    methods: {
        fetchAnneesUniversitaires() {
        const token = localStorage.getItem('userToken');
        axios.get(`${baseURL}/api/annee-universitaire`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data);
          this.anneesUniversitaires = response.data.map(anneeUniversitaire => ({
            ...anneeUniversitaire,
            annee_universitaire: `${anneeUniversitaire.annee_debut}/${anneeUniversitaire.annee_fin}`,            

          }));
        })
        .catch(error => console.error('Erreur lors de la récupération des formations:', error));
      },

      createAnnee() {
        console.log(this.form);
        const [annee_debut, annee_fin] = this.form.annee.split('/').map(Number); // Convert to numbers if necessary

        const endpoint = this.form.selectedAnneeId == '' ? `${baseURL}/api/annee-universitaire/create` : `${baseURL}/api/annee-universitaire/copy`
        
        axios.post(endpoint, {annee_debut, annee_fin}, {
          headers: {  
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
          },
        })
        .then(() => {
        this.$router.push({ name: 'AnneeList' });
        })
        .catch(error => {
          console.error('Erreur lors de la création de l\' Année :', error.response.data);
          alert('Échec de la création de l\' Année. ' + error.response.data.message);
        }); 
      },
      onNiveauChange() {
        // Réinitialisez les sélections quand le niveau change
        this.form.groupe_ids = [];
        this.form.parcours_ids = [];
      }
    },
  }
  </script>
  
  <style scoped>
  /* Vos styles existants */
  </style>
  