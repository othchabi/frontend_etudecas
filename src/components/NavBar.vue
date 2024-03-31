<template>
  <nav class="fixed top-0 left-0 w-full z-10 flex justify-between items-center py-4 px-6 shadow-md bg-white">
    <div class="font-bold text-xl">EquipesPedagogique</div>
    <div>
      <router-link to="/login" class="mr-4 px-4 py-2 rounded bg-blue-500 text-white shadow hover:bg-blue-700">Login</router-link>
      <router-link to="/register" class="px-4 py-2 rounded bg-green-500 text-white shadow hover:bg-green-700">Register</router-link>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
};
</script>
