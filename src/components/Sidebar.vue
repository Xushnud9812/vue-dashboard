<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { useSidebarStore } from '@/store/sidebar';


const sidebarStore = useSidebarStore()


const sidebarMenu = ref([
  {
    name: 'Bosh sahifa',
    url: '/',
    icon: ''
  },
  {
    name: 'Foydalanuvchilar',
    url: '/users',
    icon: ''
  },
  {
    name: 'Guruhlar',
    url: '/groups',
    icon: ''
  },
  {
    name: 'Topshiriqlar',
    url: '/tasks',
    icon: ''
  },
])

</script>

<template>
  <div>
    <div :class="sidebarStore.isSidebar ? 'left-0' : '-left-full '"
      class="fixed duration-300 p-5 top-0  w-72 h-screen z-50 bg-blue-500">
      <div>
        <img class="mx-auto" src="/logo.png" alt="">
      </div>


      <div class="flex flex-col mt-10 gap-2">
        <router-link
          class="[&.router-link-exact-active]:bg-[#114E7B] flex items-center gap-2 text-white p-3 rounded-md hover:bg-[#114E7B]"
          v-for="item, index in sidebarMenu" :key="index" :to="item.url">
          <Icon icon="mingcute:home-3-line" />
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>