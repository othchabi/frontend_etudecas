<template>
  <div class="flex flex-col h-screen">
    <h1 class="text-center text-5xl font-bold my-4">Créer une Nouvelle Formation</h1>
    <main class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-6xl px-4">
        <div class="shadow-lg rounded-lg overflow-hidden p-8">
          <form @submit.prevent="createFormation" class="flex flex-col gap-6">
            <h2 class="text-lg font-semibold">Niveau</h2>
            <select v-model="form.niveau" required class="input" @change="onNiveauChange">
              <option value="" disabled>Sélectionnez le Niveau</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
            </select>

            <h2 class="text-lg font-semibold">Date de Début</h2>
            <input type="date" v-model="form.date_debut" placeholder="Date de Début" class="input" >

            <h2 class="text-lg font-semibold">À partir d'une maquette</h2>
            <select v-model="form.base"  class="input">
              <option value="" disabled>Choisir une ancienne année</option>
              <option v-for="annee in maquetteNiveaux" :key="annee.id" :value="annee.id">{{ annee.name }}</option>
            </select>


       
            
            <button type="submit" class="btn">Créer Formation</button>
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
        niveau: '',
        date_debut: '',
        base: ''
      },
      anneeId: this.$route.params.anneeId,
      maquetteNiveaux: [

      ],
    };
  },

  
  methods: {

    fetchMaquettes(){
  const endpoint = `${baseURL}/api/annee-formation/maquettes`;
  axios.get(endpoint, {
    params: { niveau: this.form.niveau }, // Include `niveau` as a query parameter
    headers: {  
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
    },
  })
  .then(response => {
    // Assuming you want to do something with the response data
    

  this.maquetteNiveaux = response.data.map(maquette => ({
            id: maquette.id,            
            name: `${maquette.niveau} - ${maquette.annee_universitaire.annee_debut}/${maquette.annee_universitaire.annee_fin}`,            

          })); 
    
        
  })
  .catch(error => {
    console.error('Erreur lors de la récupération :', error.response ? error.response.data : 'Unknown error');
    alert('Échec lors de la récupération. ' + (error.response && error.response.data.message ? error.response.data.message : 'Error'));
  });
},
    createFormation() {
let formData = { ...this.form };

if (formData.date_debut === "") {
  delete formData.date_debut;
}

console.log(formData)
      const endpoint =   this.form.base === '' ? `${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/create` : `${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/copy/${formData.base}`
      axios.post(endpoint, formData, {
        headers: {  
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
      })
      .then(() => {
        this.$router.push({ name: 'NiveauList' });
      })
      .catch(error => {
        console.error('Erreur lors de la création du niveau :', error.response.data);
        alert('Échec de la création du niveau. ' + error.response.data.message);
      }); 
    },
    onNiveauChange() {
      this.fetchMaquettes()
    }
  },
}
</script>

<style scoped>
</style>
