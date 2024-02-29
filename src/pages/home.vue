
<template>
  <div class="">
    <div class="grid grid-cols-5 gap-7">

    
        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#166199]">
          <span>
            <Icon class="text-5xl text-white" icon="mdi:leads-outline" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Yangi lidlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#0d9488]">
          <span>
            <Icon class="text-5xl text-white" icon="clarity:tasks-line" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Bugungi topshiriqlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#fb7185]">
          <span>
            <Icon class="text-5xl text-white" icon="streamline:strategy-tasks" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Bajarilmagan topshiriqlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#2563eb]">
          <span>
            <Icon class="text-5xl text-white" icon="icon-park-outline:plan" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Oylik reja</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#0891b2]">
          <span>
            <Icon class="text-5xl text-white" icon="formkit:group" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Yangi guruhlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>


    </div>
    <div class="mb-20 mt-5 col-span-3 h-96  bg-white rounded-lg p-6 border-1 border-[#2e5bff14]">
      <chart />
    </div>
  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue';
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped></style>