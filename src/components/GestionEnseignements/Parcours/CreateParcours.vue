<template>
  <div class="flex flex-col h-screen">
    <h1 class="text-center text-5xl font-bold my-4">Créer Un Nouveau Parcours</h1>
    <main class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-6xl px-4">
        <div class="shadow-lg rounded-lg overflow-hidden p-8">
          <form @submit.prevent="createParcours" class="flex flex-col gap-6">
            <h2 class="text-lg font-semibold">Nom du parcours :</h2>
            <input type="text" v-model="form.nom" placeholder="OSIE,ITD,Emiage..." class="input" >
   
            <button type="submit" class="btn">Créer Parcours</button>
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
        nom: '',
      },
      anneeId: this.$route.params.anneeId,
      niveauId: this.$route.params.niveauId,
    };
  },

  
  methods: {

createParcours() {
let formData = { ...this.form };

      const endpoint = `${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/parcours/create`;
      axios.post(endpoint, formData, {
        headers: {  
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
      })
      .then(() => {
        this.$router.push({ name: 'ParcoursList' });
      })
      .catch(error => {
        console.error('Erreur lors de la création du parcours :', error.response.data);
        alert('Échec de la création du parcours. ' + error.response.data.message);
      }); 
    }
  },
}
</script>

<style scoped>
</style>
