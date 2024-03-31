<template>
    <div class="flex flex-col h-screen">
      <!-- Enhanced Title Size -->
      <h1 class="text-center text-5xl font-bold my-4">Éditer la formation</h1>
  
      <!-- Main Content -->
      <main class="flex-1 flex flex-col items-center justify-center">
        <div class="w-full max-w-6xl px-4">
          <!-- Form for Editing an Existing Formation -->
          <div class="shadow-lg rounded-lg overflow-hidden p-8">
            <form @submit.prevent="submitEdit">
              <div class="mb-4">
                <label for="formationName" class="block text-sm font-medium text-gray-700">Nom de la formation</label>
                <input type="text" id="formationName" v-model="currentFormation.name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
              </div>
  
              <div class="mb-6">
                <label for="formationDescription" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="formationDescription" v-model="currentFormation.description" required rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
  
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-150">Mettre à jour</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditFormation',
    props: {
      id: String // Assuming the ID is a string, use Number if it's a numeric ID
    },
    data() {
      return {
        currentFormation: {
          name: '',
          description: ''
        }
      };
    },
    created() {
      this.fetchFormation();
    },
    methods: {
      fetchFormation() {
        // Fetch the existing formation data using this.id
        // Here you would make an API call to get the formation details
        // and then assign the response to this.currentFormation
      },
      submitEdit() {
        console.log('Updating formation:', this.currentFormation);
        // Here you would handle the form submission to update the formation
        // This would typically involve making an API call
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles you need here */
  </style>
  