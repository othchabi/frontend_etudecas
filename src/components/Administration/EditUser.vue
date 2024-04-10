<template>
    <div class="flex flex-col h-screen">
      <h1 class="text-center text-5xl font-bold my-4">Modifier l'Utilisateur</h1>
      <main class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-6xl px-4">
          <div class="shadow-lg rounded-lg overflow-hidden p-8">
            <form @submit.prevent="editUser" class="flex flex-col gap-4">
              <input v-model="form.nom" placeholder="Nom" class="input" required>
              <input v-model="form.prenom" placeholder="Prénom" class="input" required>
              <input v-model="form.username" placeholder="Nom d'utilisateur" class="input" required>
              <input v-model="form.password" placeholder="Nouveau mot de passe (laisser vide si inchangé)" type="password" class="input">
              <select v-model="form.roles" multiple class="input">
  <option v-for="role in allRoles" :key="role.id" :value="role.id">{{ role.name }}</option>
</select>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Modifier</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        id: null,
        nom: '',
        prenom: '',
        username: '',
        password: '',
        roles: [],
      },
      allRoles: [
      { id: 1, name: 'Enseignant' },
      { id: 3, name: 'Responsable année' },
      { id: 2, name: 'Responsable master' },
      { id: 4, name: 'Administrateur' },
    ],
      originalData: {}, 

    };
  },
  methods: {
    fetchUserData() {
      const userId = this.$route.params.userId; // Match the parameter name with your route config
      const token = localStorage.getItem('userToken');

      axios.get(`http://localhost:8000/api/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        const { id, nom, prenom, username, roles } = response.data[0];
        this.form = { 
          ...this.form, 
          id, 
          nom, 
          prenom, 
          username, 
          roles: roles.map(role => role.pivot.role_id),
        };

        this.originalData = JSON.parse(JSON.stringify(this.form)); 

      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
      });
    },
    editUser() {

        const changes = {};
  for (const key in this.form) {
    if (JSON.stringify(this.form[key]) !== JSON.stringify(this.originalData[key])) {
      changes[key] = this.form[key];
    }
  }

  // If password field is empty, do not include it in changes
  if ('password' in changes && !changes.password) {
    delete changes.password;
  }

  console.log("Data to update:", changes);

  if (Object.keys(changes).length === 0) {
    alert('No changes detected.');
    return;
  }

      const token = localStorage.getItem('userToken');
      const userData = { ...this.form };
      if (!userData.password) delete userData.password;
      console.log(
        userData
      )

     axios.post(`http://localhost:8000/api/user/edit/${this.form.id}`, userData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(() => {
        alert('User updated successfully!');
        this.$router.push({ name: 'ListUsers' }); 
      })
      .catch(error => {
        console.error('There was an error updating the user:', error.response.data);
        alert('Failed to update user. ' + error.response.data.message);
      }); 
    },
  },
  created() {
    this.fetchUserData();
  },
}
</script>
