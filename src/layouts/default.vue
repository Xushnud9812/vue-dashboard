<template>
  <div>
    <Sidebar />
    <Navbar />
    <div class=" py-24 px-5 duration-300" :class="sidebarStore.isSidebar ? 'pl-[310px]' : ''">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { useSidebarStore } from '@/store/sidebar';

const sidebarStore = useSidebarStore()
</script>

<style lang="scss" scoped></style>