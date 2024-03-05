<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <div class="">
      <div class="pt-5 flex items-center justify-between mb-10">
        <h1 class="text-xl text-[#29A0E3] font-medium">#P-10/2023 guruh</h1>
        <div class="flex items-center gap-2">
          <button class="flex  items-center text-[#29A0E3]">
            Eksport excel
            <Icon class="text-3xl" icon="material-symbols:download" />
          </button>
          <div class="relative">
            <input v-model="search" placeholder="Search..." class="focus:outline-none w-72 pr-12 border px-4 py-2 rounded"
              type="text">
            <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
          </div>
          <button
            class="bg-[#29A0E31A]  py-2.5 px-8 rounded flex gap-1  items-center text-[#29A0E3] hover:bg-[#114E7B] hover:text-white">
            <Icon class="text-lg" icon="ep:plus" />
            O’quvchi qo’shish
          </button>
          <button class="bg-[#166199] rounded py-2.5 px-5 flex gap-1 items-center text-white">
            Kursni yakunlash
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 mb-10 bg-gray-300 rounded-md overflow-hidden">
      <router-link exact-active-class="active"
        class="flex font-semibold [&.active]:bg-white [&.active]:text-primary  justify-center gap-5 p-5"
        :to="{ name: 'pupils' }">
        <Icon class="text-2xl" icon="mdi:users-group" />
        O'quvchilar ro'yhati
      </router-link>
      <router-link exact-active-class="active"
        class="flex font-semibold [&.active]:bg-white [&.active]:text-primary  justify-center gap-5 p-5"
        :to="{ name: 'jurnal' }">
        <Icon class="text-2xl" icon="memory:journal" />
        Jurnal
      </router-link>
      <router-link exact-active-class="active"
        class="flex font-semibold [&.active]:bg-white [&.active]:text-primary  justify-center gap-5 p-5"
        :to="{ name: 'payments' }">
        <Icon class="text-2xl" icon="iconoir:hand-cash" />
        To'lovlar grafigi
      </router-link>
      <router-link exact-active-class="active"
        class="flex font-semibold [&.active]:bg-white [&.active]:text-primary  justify-center gap-5 p-5"
        :to="{ name: 'about-group' }">
        <Icon class="text-2xl" icon="ic:round-list" />
        Umumiy malumot
      </router-link>

    </div>
    <router-view />
  </div>
</template>



