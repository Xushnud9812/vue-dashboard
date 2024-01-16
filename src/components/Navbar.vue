<script setup>
import { Icon } from '@iconify/vue';
import { useUserStore } from '@/store/user';

import { useRouter } from 'vue-router'

const userStore = useUserStore()

const router = useRouter()

const logout = () => {
  userStore.$reset()
  router.push('/login')
}


</script>

<template>
  <div class="fixed w-full z-40 bg-white  shadow-md">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="logo">
          <router-link to="/" class="text-primary font-bold text-xl">Logo</router-link>
        </div>
        <div class="flex gap-4 py-5">
          <router-link to="/products" class="font-medium hover:text-primary">Mahsulotlar</router-link>
          <router-link to="/posts" class="font-medium hover:text-primary">Postlar</router-link>
          <router-link to="/users" class="font-medium hover:text-primary">Foydalanuvchilar</router-link>

        </div>
        <div class="logo">
          <!-- <router-link to="/login" class="font-medium hover:text-primary">Kirish</router-link> -->
          <div>
            <div class="flex">
              <div class="relative  group ">
                <button class="py-5 group/button flex items-center gap-2">
                  <div
                    class="rounded-full overflow-hidden border border-primary w-10 h-10 flex justify-center items-center ">

                    <img class="" :src="userStore.user.image" alt="User's avatar">
                  </div>

                  {{ userStore.user.firstName }}
                  {{ userStore.user.lastName }}
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