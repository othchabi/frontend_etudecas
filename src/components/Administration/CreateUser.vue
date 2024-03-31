<template>
    <div class="flex flex-col h-screen">
      <h1 class="text-center text-5xl font-bold my-4">Créer un Nouvel Utilisateur</h1>
      <main class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-6xl px-4">
          <div class="shadow-lg rounded-lg overflow-hidden p-8">
            <form @submit.prevent="createUser" class="flex flex-col gap-4">
              <input v-model="form.nom" placeholder="Nom" class="input" required>
              <input v-model="form.prenom" placeholder="Prénom" class="input" required>
              <input v-model="form.username" placeholder="Nom d'utilisateur" class="input">
              <input v-model="form.password" placeholder="Mot de passe" class="input">
              <select v-model="form.roles" multiple class="input">
                <option value="1">Enseignant</option>
                <option value="2">Responsable année</option>
                <option value="3">Responsable master</option>
                <option value="4">Administrateur</option>
              </select>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Créer Utilisateur</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import { baseURL } from '../../baseUrl';
  export default {
    components: {
      // Your components here
    },
    data() {
      return {
        // Other data properties
        form: {
          nom: '',
          prenom: '',
          username: '',
          email: '',
          roles: [],
        },
      };
    },
    methods: {
      createUser() {
        const token = localStorage.getItem('userToken');
        const userData = {
          nom: this.form.nom,
          prenom: this.form.prenom,
          username: this.form.username,
          password: this.form.password,
          roles: this.form.roles,
        };

        axios.post(`${baseURL}/api/user/create`, userData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(() => {
          alert('User created successfully!');
          this.$router.push({ name: 'ListUsers' }); 
        })
        .catch(error => {
          console.error('There was an error creating the user:', error.response.data);
          alert('Failed to create user. ' + error.response.data.message);
        });
      },
    },
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  .input {
    padding: 8px;
    margin: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  