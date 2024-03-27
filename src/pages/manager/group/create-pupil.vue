<script setup>
import { useRouter } from 'vue-router'
import { api } from '@/api'
import { ref } from 'vue'

const router = useRouter()
const getData = ref([])
const close = () => {
  router.go(-1)
}
const fetchData = async () => {
  try {
    const response = await api.get(`group/get-data`);
    getData.value = response.data
    console.log('rr', getData.value)
  } catch (e) {
    console.log('e', e)
  }
}
const formData = ref({
  direction_id: null,
  day: null,
  room_id: null,
  time: null,
  start_date: null
})
const createGroup = async () => {
  try {
    await api.post('/group/create', formData._value)
    // window.location.reload();
    router.push('/students')
  } catch (e) {

  }
}
fetchData()


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
          <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="FIO">
          <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="FIO">
          <select required class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded"
            v-model="formData.room_id">
            <option v-for="item, index in getData.room" :key="index" :value="item.id">{{ item.name }}</option>
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