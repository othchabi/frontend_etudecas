<template>
  <div class="flex flex-col h-screen">
    <h1 class="text-center text-5xl font-bold my-4">Créer Une Nouvelle UE</h1>
    <main class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-6xl px-4">
        <div class="shadow-lg rounded-lg overflow-hidden p-8">
          <form @submit.prevent="createUE" class="flex flex-col gap-6">
            <div>
              <label for="code_apogee" class="block text-sm font-medium text-gray-700">Code Apogée</label>
              <input id="code_apogee" v-model="form.code_apogee" type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
              <input id="nom" v-model="form.nom" type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label for="volume_horaire_cm" class="block text-sm font-medium text-gray-700">Volume Horaire CM</label>
              <input id="volume_horaire_cm" v-model="form.volume_horaire_cm" type="number" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label for="volume_horaire_td" class="block text-sm font-medium text-gray-700">Volume Horaire TD</label>
              <input id="volume_horaire_td" v-model="form.volume_horaire_td" type="number" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            </div>

            <div>
              <label for="parcours" class="block text-sm font-medium text-gray-700">Parcours</label>
              <select id="parcours" v-model="form.parcours" multiple class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option v-for="option in options" :key="option.id" :value="option.id">{{ option.nom }}</option>
              </select>
            </div>

            <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Créer</button>
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
        code_apogee: '',
        nom: '',
        volume_horaire_cm: '0',
        volume_horaire_td: '0',
        parcours: []
      },
      options: [],
      anneeId: this.$route.params.anneeId,
      niveauId: this.$route.params.niveauId,
    };
  },
  created() {
      this.fetchParcours();
    },

  methods: {
fetchParcours() {

const token = localStorage.getItem('userToken');
axios.get(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/parcours`, {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})
.then(response => {
  console.log(response.data);
  this.options = response.data;
})
.catch(error => console.error('Erreur lors de la récupération des parcours de l\'année', error));
},

createUE() {
let formData = { ...this.form };

      const endpoint = `${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/ues/create`;
      axios.post(endpoint, formData, {
        headers: {  
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
      })
      .then(() => {
        this.$router.push({ name: 'UEList' });
      })
      .catch(error => {
        console.error('Erreur lors de la création de l\'ue :', error.response.data);
        alert('Échec de la création de l\'ue. ' + error.response.data.message);
      }); 
    }
  },
}
</script>

<style scoped>
</style>
