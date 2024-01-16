<template>
  <div>
    <Navbar />
    <div class="py-28">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style lang="scss" scoped></style>