<script setup>
import { useRouter } from 'vue-router'
import { api } from '@/api'
import { ref } from 'vue'

const router = useRouter()
const getData = ref([])
const close = () => {
  router.go(-1)
}

const formData = ref({
  full_name: null,
  brightday: null,
  phone: null,
  gender: null
})
const createGroup = async () => {
  try {
    await api.post('/student/create', formData._value)
    router.push('/students')
  } catch (e) {

  }
}


</script>
<template>
  <div class="">
    <div @click="close" class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
    <div class="fixed top-0 right-0 w-1/5 h-screen bg-white z-50 p-5">

      <div class="mb-10 flex justify-between items-center">
        <h1>Yangi o'quvchi yaratish</h1>
        <button @click="close">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>
      <form @submit="createGroup" action="">

        <div class="flex flex-col gap-5">
          <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="F.I.O" v-model="formData.full_name">
          <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="Telefon raqami" v-model="formData.phone">
          <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="date" v-model="formData.brightday">
          <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" v-model="formData.gender">
            <option value="1">Erkak</option>
            <option value="1">Ayol</option>
          </select>
        </div>
        <button class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
          Yaratish
        </button>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>