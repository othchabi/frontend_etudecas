<template>
  <div class="flex flex-col h-screen">
    <h1 class="text-center text-5xl font-bold my-4">Créer un Groupe :</h1>
    <main class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-6xl px-4">
        <div class="shadow-lg rounded-lg overflow-hidden p-8">
          <form @submit.prevent="createGroupe" class="flex flex-col gap-6">
            <h2 class="text-lg font-semibold">Niveau</h2>
            <select v-model="form.type" required class="input">
              <option value="" disabled>Sélectionnez le Type De Groupe</option>
              <option value="cm">CM</option>
              <option value="td">TD</option>
            </select>

            <h2 class="text-lg font-semibold">Numéro</h2>
            <input type="number" v-model="form.numéro" placeholder="Numéro du groupe" class="input" >



       
            
            <button type="submit" class="btn">Créer Le Groupe</button>
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
        type: '',
        numéro: '',
      },
      anneeId: this.$route.params.anneeId,
      ueId: this.$route.params.ueId,
      niveauId: this.$route.params.niveauId,
      maquetteNiveaux: [

      ],
    };
  },

  
  methods: {
    createGroupe() {
      axios.post(`${baseURL}/api/annee-universitaire/${this.anneeId}/annee-formation/${this.niveauId}/ues/${this.ueId}/groupes/create`, this.form, {
        headers: {  
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
      })
      .then(() => {
        this.$router.push({ name: 'ListGroupes' });
      })
      .catch(error => {
        console.error('Erreur lors de la création du groupe :', error.response.data);
        alert('Échec de la création du groupe. ' + error.response.data.message);
      }); 
    },

  },
}
</script>

<style scoped>
</style>
