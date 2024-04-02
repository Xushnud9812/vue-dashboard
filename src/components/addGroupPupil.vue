<script setup>
import { ref } from 'vue'
import { api } from '@/api'

const candidate = ref([])
const props = defineProps(['group_id'])
const fetchData = async () => {
  try {
    const response = await api.get(`group/service`);
    candidate.value = response.data.data
    console.log(candidate.value)
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const data = ref({
  student_id: null,
  group_id: props.group_id,
  project_id: null,
  amount: null,
  social_status_id: null
})
const checkStudent = async (student) => {
  try {
    const response = await api.get(`group/check-student/${student}`);
    console.log(response.data.data)
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
const addGroupStudent = async () => {
  try {
    await api.post('/group/create-group-student', data._value)
    router.push(`/groups/${data.group_id}`)

  } catch (e) {
    console.log(e)
  }
}
fetchData()

</script>

<template>
  <div>
    <div class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
    <div class="fixed top-1/2 w-1/4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white z-50 p-5">
      <div class="mb-10 flex justify-between items-center">
        <h1>O'quvchini guruhga qo'shish</h1>
        <button @click="$emit('close')">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>

      <div class="relative w-full">
        <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
          placeholder="ID raqamni kiriting">
        <Icon class="absolute top-1/2  right-3 -translate-y-1/2 " icon="mingcute:search-line" width="26" height="26" />
      </div>

      <div class="my-5">
        <div class="flex justify-between border-b py-3 ">
          <h1 class="font-semibold">F.I.O</h1>
          <p class="text-gray-500">Umidbek Jumaniyozov</p>
        </div>
        <div class="flex justify-between border-b py-3 ">
          <h1 class="font-semibold">Telefon raqami</h1>
          <p class="text-gray-500">+998911347773</p>
        </div>
        <div class="flex justify-between border-b py-3 ">
          <h1 class="font-semibold">ID raqami</h1>
          <p class="text-gray-500">1000001AA</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <select class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
            v-model="data.project_id">
            <option v-for="item, index in candidate[0]" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div>
          <select class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name=""
            v-model="data.social_status_id">
            <option v-for="item, index in candidate[1]" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div class="col-span-2">
          <input class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" type="text"
            v-model="data.amount" placeholder="Summani kiriting">
        </div>
      </div>


      <div class="">
        <button @click="addGroupStudent" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
          Guruhga qo‘shish
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>