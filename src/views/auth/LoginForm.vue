<template>
  <div class="max-w-sm mx-auto mt-10">
    <form @submit.prevent="loginAccount" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
          Nom d'utilisateur
        </label>
        <input v-model="account.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="account.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Connexion
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { baseURL } from '../../baseUrl';
export default {
  name: 'LoginForm',
  data() {
    return {
      account: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapMutations(['setAuth', 'setUserRoles', 'setUserFirstName', 'setUserLastName']), // Use Vuex mutations
    async loginAccount() {
      // Validate before submitting
      if (!this.isValidForm()) {
        // Show error message or prevent form submission
        return;
      }
      
      try {
        const response = await axios.post(`${baseURL}/api/login`, this.account);

        // Check for successful login response (status 201)
        if (response.status === 200) {
          // Assuming the response contains the token and roles
          const { token, roles, firstName, lastName } = response.data;
          // Store the token in localStorage
          localStorage.setItem('userToken', token);

          // Update Vuex store
          this.setAuth(true);
          this.setUserRoles(roles);
          this.setUserFirstName(firstName);
          this.setUserLastName(lastName);

          this.$router.push({ name: 'Dashboard' }); 
        }
      } catch (error) {
        console.error("Login error:", error);
      } 
    },
    isValidForm() {
      return (

        this.account.username &&
        this.account.password 
      );
    },
  },
};
</script>
