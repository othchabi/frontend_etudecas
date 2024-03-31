<!-- SearchBar.vue -->
<template>
  <div class="search-bar-container tw-flex tw-justify-center tw-py-4">
    <input
      type="text"
      v-model="query"
      @input="$emit('update:query', query)"
      class="tw-w-full tw-max-w-xl tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-transparent tw-transition tw-duration-150 tw-ease-in-out tw-placeholder-gray-400"
      placeholder="Search..."
    />
  </div>  
</template>
  
  <script scoped>
  export default {
    name: 'SearchBar',
    data() {
      return {
        query: '',
      };
    },
  };
  </script>
  
  <style >
  .search-bar-container input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  </style>
  