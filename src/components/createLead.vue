<script setup>
import { api } from '@/api'
import { ref } from "vue";
const getData = ref([])

const fetchData = async () => {
  try {
    const response = await api.get(`lead/get-target`);
    getData.value = response.data
  } catch (e) {
    console.log('e', e)
  }
}

const emit = defineEmits(['create'])

const createGroup = async () => {
  try {
    await api.post('/lead/create', formData._value)
    emit('create')
  } catch (e) {
    console.log(e)
  }
}
const formData = ref({
  full_name: null,
  target: null,
  phone: null
})

fetchData()
</script>
<template>
  <div>
    <div class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
    <div class="fixed top-1/2 w-1/4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white z-50 p-5">
      <div class="mb-10 flex justify-between items-center">
        <span class="text-lg">Yangi lid yaratish</span>
        <button @click="$emit('close')">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>
      <div class="grid  gap-3">
        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="F.I.O"
          v-model="formData.full_name">
        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" v-model="formData.phone"
          placeholder="Telefon raqami">
        <div>
          <select class="w-full px-5 py-2 focus:outline-none pr-12 bg-gray-100  rounded" v-model="formData.target">
            <option v-for="item, index in getData.target" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>
      <div class="">
        <button @click="createGroup" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
          Yaratish
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>