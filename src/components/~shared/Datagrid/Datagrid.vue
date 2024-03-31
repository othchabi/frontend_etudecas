<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="header in headers" :key="header.text" class="px-6 py-3">{{ header.text }}</th>
          <th v-if="actions" class="px-2 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <!-- Wrap the content of non-action cells in a div and attach the click event to the div -->
          <td v-for="header in headers" :key="header.value" class="px-6 py-4">
            <div @click="$emit('click-row', row)" class="cursor-pointer">{{ row[header.value] }}</div>
          </td>
          <!-- Actions column remains unchanged, no click event attached here -->
          <td v-if="actions" class="px-2 py-4 text-center" style="width: 80px;">
            <slot name="row-actions" :row="row"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


  
  <script>
  export default {
    props: {
      headers: Array, // [{ text: 'Name', value: 'name' }, ...]
      rows: Array, // [{ id: 1, name: 'Item 1', ... }, ...]
      actions: Boolean,

    },
    emits: ['edit', 'delete', 'click-row'],

  
    methods: {

      onEdit(row) {
        this.$emit('edit', row);
      },
      onDelete(row) {
        this.$emit('delete', row);
      },
      onClick(row) {
      this.$emit('onClick', row); // Emit the 'onChoose' event with the row as payload
    },
    
    }
  };
  </script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse; /* Ensures borders between cells appear as single lines */
  margin-top: 1rem;
}

th, td {
  text-align: left;
  padding: 8px; /* Adjust padding for spacing within cells */
  border: 1px solid #ddd; /* Light gray border for a subtle look */
}

th {
  background-color: #f4f4f4; /* Slightly different background for header cells */
  color: #333; /* Dark text color for contrast */
}

tr:nth-child(even) {
  background-color: #fafafa; /* Zebra-striping for rows */
}

tr:hover {
  background-color: #eaeaea; /* Hover effect for rows */
}

button {
  cursor: pointer;
  padding: 6px 12px; /* Padding inside buttons */
  margin-right: 4px; /* Space between buttons */
  border: none; /* Remove default border */
  border-radius: 4px; /* Rounded corners for buttons */
  background-color: #007bff; /* Blue background for buttons */
  color: white; /* White text */
  transition: background-color 0.2s; /* Smooth transition for hover effect */
}

button:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}

.actions {
  text-align: center; /* Center the actions buttons within the cell */
}
</style>

  