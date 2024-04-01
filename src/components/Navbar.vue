<script setup>
import { Icon } from '@iconify/vue';
import { useUserStore } from '@/store/user';
import { useSidebarStore } from '@/store/sidebar';

import { useRouter } from 'vue-router'
const userStore = useUserStore()

const sidebarStore = useSidebarStore()

const router = useRouter()

const logout = () => {
  userStore.$reset()
  router.push('/login')
}

const changeSidebar = () => {
  sidebarStore.changeSidebar()
}


</script>

<template>
  <div :class="sidebarStore.isSidebar ? 'pl-72' : 'pl-0'"
    class="fixed w-full  duration-300  z-40 bg-[#F6F6F8]  shadow-md">
    <div class="px-5">
      <div class="flex justify-between items-center">
        <div class=" flex items-center gap-3">
          <button :class="sidebarStore.isSidebar ? '' : 'rotate-180'" @click="changeSidebar" class="text-primary">
            <Icon class="text-2xl" icon="ep:fold" />
          </button>
          <router-link to="/" class="text-primary">Praktikum Academy boshqaruv tizimi</router-link>
        </div>

        <div class="logo">
          <!-- <router-link to="/login" class="font-medium hover:text-primary">Kirish</router-link> -->
          <div>
            <div class="flex">
              <div class="relative  group ">
                <button class="py-3 group/button flex items-center gap-2">
                  <div class="rounded-full bg-[#07A2871A] w-10 h-10 flex justify-center items-center ">

                    <Icon class="text-primary text-2xl" icon="ep:user" />
                  </div>

                  <!-- {{ userStore.user.firstName }}
                  {{ userStore.user.lastName }} -->
                  <Icon class="duration-200 group-hover/button:rotate-180" icon="iconamoon:arrow-down-2" />
                </button>

                <div class="hidden border  group-hover:block absolute z-30 right-0 ">
                  <div class="bg-white flex flex-col divide-y rounded shadow-lg  w-44">
                    <router-link to="/" class="flex items-center gap-2 text-base py-2 px-2 hover:text-primary">
                      <Icon class="text-xl" icon="iconamoon:profile-fill" />
                      Your profile
                    </router-link>
                    <router-link to="/" class="flex items-center gap-2 text-base py-2 px-2 hover:text-primary">
                      <Icon class="text-xl" icon="solar:settings-bold" />

                      Settings
                    </router-link>
                    <button @click="logout" class="flex items-center gap-2 text-base py-2 px-2 hover:text-primary">

                      <Icon class="text-xl" icon="mdi:logout" />
                      Sign
                      out
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <button class="flex items-center">


            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>