<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router'

const route = useRoute()


console.log(route);
const sidebarStore = useSidebarStore()


const sidebarMenu = ref([
  {
    name: 'Bosh sahifa',
    url: '/',
    icon: 'mingcute:home-3-fill'
  },
  {
    name: 'Lidlar',
    url: '/leads',
    icon: 'mdi:leads-outline'
  },
  {
    name: 'Topshiriqlar',
    url: '/tasks',
    icon: 'mingcute:task-2-line'
  },
  {
    name: 'Jo\'natilgan xabarlar',
    url: '/send-messages',
    icon: 'tabler:send'
  },
  {
    name: 'Guruhlar',
    url: '/groups',
    icon: 'mingcute:vector-group-fill'
  },
])

// const sidebarMenus = ref([
//   {
//     title: 'call-center',
//     items: [
//       {
//         name: 'Bosh sahifa',
//         url: '/',
//         icon: 'mingcute:home-3-fill'
//       },
//       {
//         name: 'Lidlar',
//         url: '/leads',
//         icon: 'mdi:leads-outline'
//       },
//       {
//         name: 'Topshiriqlar',
//         url: '/tasks',
//         icon: 'mingcute:task-2-line'
//       },
//       {
//         name: 'Jo\'natilgan xabarlar',
//         url: '/send-messages',
//         icon: 'tabler:send'
//       },
//       {
//         name: 'Guruhlar',
//         url: '/groups',
//         icon: 'mingcute:vector-group-fill'
//       },
//     ]
//   },
//   {
//     title: 'manager',
//     items: [
//       {
//         name: 'Bosh sahifa',
//         url: '/',
//         icon: 'mingcute:home-3-fill'
//       },
//       {
//         name: 'Guruhlar',
//         url: '/groups',
//         icon: 'mingcute:vector-group-fill'
//       },
//     ]
//   }
// ])
// const sidebarMenu = ref([])

// const setSidebarMenu = (name) => {
//   let menu = sidebarMenus.value.filter((item) => item.title == name)
//   sidebarMenu.value = menu[0].items
// }

// setSidebarMenu(route.name)



</script>

<template>
  <div>
    <div :class="sidebarStore.isSidebar ? 'left-0' : '-left-full '"
      class="fixed duration-300 p-5 top-0  w-72 h-screen z-50 bg-[#166199]">
      <div>
        <img class="mx-auto" src="/logo.png" alt="">
      </div>


      <div class="flex flex-col mt-10 gap-2">
        <router-link
          class="[&.router-link-exact-active]:bg-[#114E7B] flex items-center gap-2 text-white p-3 rounded-md hover:bg-[#114E7B]"
          v-for="item, index in sidebarMenu" :key="index" :to="item.url">
          <Icon :icon="`${item.icon}`" width="26" height="26" />
          <p class="text-bold">{{ item.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>