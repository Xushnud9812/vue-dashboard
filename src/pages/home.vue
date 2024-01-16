
<template>
  <div class="pt-12 container">
    <div class="grid grid-cols-3 gap-7">
      <div class="flex items-center gap-4  bg-white rounded-lg p-6 border-1 border-[#2e5bff14]">
        <span>
          <Icon class="text-5xl text-primary" icon="fa6-solid:users" />
        </span>
        <div>
          <p class="text-xs text-[#7A7A9D] mb-1.5">Foydalanuvchilar </p>
          <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#2E384D]">100 <span
              class="text-[#B2B7C1]">ta</span></h2>
        </div>
      </div>
      <div class="flex items-center gap-4  bg-white rounded-lg p-6 border-1 border-[#2e5bff14]">
        <span>
          <Icon class="text-5xl text-primary" icon="fluent-mdl2:product" />
        </span>
        <div>
          <p class="text-xs text-[#7A7A9D] mb-1.5"> Mahsulotlar </p>
          <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#2E384D]">100 <span
              class="text-[#B2B7C1]">ta</span></h2>
        </div>
      </div>
      <div class="flex items-center gap-4  bg-white rounded-lg p-6 border-1 border-[#2e5bff14]">
        <span>
          <Icon class="text-5xl text-primary" icon="material-symbols-light:post-outline" />
        </span>
        <div>
          <p class="text-xs text-[#7A7A9D] mb-1.5"> Postlar </p>
          <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#2E384D]">100<span class="text-[#B2B7C1]">ta</span>
          </h2>
        </div>
      </div>

      <div class="mb-20 col-span-3 h-96  bg-white rounded-lg p-6 border-1 border-[#2e5bff14]">
        <chart />
      </div>
    </div>

  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue';
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped></style>