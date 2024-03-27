<template>
  <div class="">
    <div @click="close" class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
    <div class="fixed top-0 right-0 w-1/5 h-screen bg-white z-50 p-5">

      <div class="mb-10 flex justify-between items-center">
        <h1>Yangi guruh yaratish</h1>
        <button @click="close">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>

      <div class="flex flex-col gap-5">
        <select class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" name="" id="">
          <option value="1">1</option>
          <option value="1">2</option>
        </select>
        <select class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" name="" id="">
          <option value="1">1</option>
          <option value="1">2</option>
        </select>
        <select class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" name="" id="">
          <option value="1">1</option>
          <option value="1">2</option>
        </select>
        <select class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" name="" id="">
          <option value="1">1</option>
          <option value="1">2</option>
        </select>
      </div>

      <div class="mt-10">
        <p class="text-gray-400">Kurs boshlanish sanasi</p>
        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="date">
      </div>


    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const close = () => {
  router.go(-1)
}

</script>

<style lang="scss" scoped></style>