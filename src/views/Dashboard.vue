<template>
  <div class="flex min-h-screen">
    <Sidebar class="flex-shrink-0" /> <!-- Sidebar can dynamically change its size -->
    <div class="flex-grow ml-4"> <!-- Content dynamically adjusts its position -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  components: {
    Sidebar
}
};
</script>
