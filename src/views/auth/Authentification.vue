<template>
    <div>
      <Navbar/>

      <div class="flex justify-center items-center" style="min-height: calc(100vh - 4rem);">
       <router-view class="w-full max-w-md mx-auto" ></router-view>
      </div>

    </div>
  </template>
  
  <script>
  import Navbar from '../../components/NavBar.vue';
  export default {
    components: {
      Navbar,
    }
  };
  </script>
  