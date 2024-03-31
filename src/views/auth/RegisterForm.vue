<template>
  <div class="max-w-sm mx-auto mt-10">
    <form @submit.prevent="registerAccount" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nom">
          Nom
        </label>
        <input v-model="account.nom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nom" type="text" placeholder="Nom">
        <p v-if="!account.nom" class="text-grey-500 text-xs italic">Nom est requis</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="prenom">
          Prénom
        </label>
        <input v-model="account.prenom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prenom" type="text" placeholder="Prénom">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom d'utilisateur
        </label>
        <input v-model="account.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input v-model="account.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        <p v-if="!isValidEmail(account.email)" class="text-grey-500 text-xs italic">Veuillez saisir une adresse email valide.</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="account.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
        <!-- Add validation message for Password if needed -->
      </div>
      <div class="mb-4">
        <label for="multiselect" class="block text-gray-700 text-sm font-bold mb-2">Mes Roles:</label>
        <select v-model="account.roles" id="multiselect" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" multiple>
  <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
</select>

        <p v-if="account.roles.length === 0" class="text-grey-500 text-xs italic">Le rôle est requis.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Inscription
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { baseURL } from '../../baseUrl';


export default {
  name: 'RegisterForm',
  data() {
    return {
      items: [{ id: 1, name: 'Enseignant' }, { id: 2, name: 'Responsable master' }, { id: 3, name: 'Responsable année' }, { id: 4, name: 'Administrateur' }],
      account: {
        nom: '',
        prenom: '',
        username: '',
        email: '',
        password: '',
        roles: [], 
      },
    };
  },
  methods: {
    async registerAccount() {
      // Validate before submitting
      if (!this.isValidForm()) {
        // Show error message or prevent form submission
        return;
      }
      
      try {
        const response = await axios.post(`${baseURL}/api/register`, this.account);
        console.log(response.data);

        if (response.status === 200) {


          this.$router.push({ name: 'login' }); 
          alert('Compte Créer')
        }


      } catch (error) {
        error.response.data.message ? alert(error.response.data.message) : alert(error)
        
      }
    },
    isValidEmail(email) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidForm() {
      // Check if all required fields are filled
      return (
        this.account.nom &&
        this.account.email &&
        this.account.username &&
        this.isValidEmail(this.account.email) &&
        this.account.password &&
        this.account.roles.length > 0
      );
    },
  },
};
</script>
