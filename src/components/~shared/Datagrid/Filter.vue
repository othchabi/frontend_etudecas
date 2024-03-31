<!-- FilterSelect.vue -->
<template>
  <div class="filter-select-container">
    <select 
      class="block w-full px-4 py-2 mt-1 border border-gray-300 bg-white rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" 
      @change="$emit('update:filter', $event.target.value)"
    >
      <option value="" disabled selected>Filtrer</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
  <script>
  export default {
    name: 'Filter',
    props: {
      options: Array, // [{ text: 'Name', value: 'name' }, ...]
    },
  };
  </script>
  
  <style scoped>
  .filter-select-container select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
  }
  </style>
  