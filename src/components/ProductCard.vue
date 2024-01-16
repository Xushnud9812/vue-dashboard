<script setup>
import { Icon } from '@iconify/vue';
defineProps({
  product: Object
})
</script>

<template>
  <div>

    <div class="rounded relative bg-white overflow-hidden shadow cursor-pointer hover:shadow-primary duration-100">
      <img class="w-full h-52 shadow object-cover" :src="product.thumbnail" alt="">
      <!-- <span class="absolute top-5 right-5 ">
        <Icon class="" icon="gg:heart" />
      </span> -->
      <div class="p-4 pt-2 ">
        <div class="flex justify-between items-center">
          <p class="text-[#666]">{{ product.category }}</p>
          <div class="flex items-center gap-1 text-base">
            <Icon class="text-primary text-xl" icon="mingcute:star-fill" />
            {{ product.rating }}
          </div>

        </div>
        <h1 class="h-[50px] font-semibold line-clamp-2">{{ product.title }}</h1>

        <h1 class="text-xl font-bold text-[#219EBC]">{{ product.price }} $</h1>
      </div>
    </div>

  </div>
</template>



<style lang="scss" scoped></style>