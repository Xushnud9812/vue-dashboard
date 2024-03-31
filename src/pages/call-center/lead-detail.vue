<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { api } from '@/api'
import { useRoute } from 'vue-router'
import dateformat from "dateformat";
const lead = ref()
const route = useRoute()
function dateFormat2(date) {
  let date1 = dateformat(date, "dd.mm.yyyy");
  return date1;
}
const fetchData = async () => {
  try {
    const response = await api.get(`lead/by-id/${route.params.id}`);
    lead.value = response.data.lead
    console.log('da', lead.value)
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

fetchData()
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-5" v-if="lead != null">
      <div class="col-span-1">
        <div class="bg-white p-5 rounded-md">
          <div class="flex justify-between mb-10">
            <div class="flex gap-5">
              <div class="w-10 h-10 flex justify-center items-center text-2xl bg-primary rounded-full text-white">{{ lead.name[0] }}
              </div>
              <div>
                <h1 class="text-primary font-semibold">{{ lead.name }}</h1>
                <p>{{ lead.phone }}</p>
              </div>
            </div>
            <div class="text-[#008E76] font-semibold text-right">
              <p>{{ dateFormat2(lead.date) }}</p>
              <p>{{ lead.time.slice(0,5) }}</p>
            </div>
          </div>


          <div class="flex gap-5 items-center mb-5">
            <div class="flex items-center gap-5">
              <h1 class="text-xl font-semibold text-primary">Mijoz holati</h1>
            </div>
            <span class="bg-primary py-1 px-2 text-white rounded-md">Yangi mijoz</span>
          </div>
          <div class="mb-5">
            <div class="flex items-center gap-5">
              <h1 class="text-xl font-semibold text-primary">Mijoz haqida:</h1>
              <button>
                <Icon class="text-2xl" icon="mdi:edit" />
              </button>
            </div>
          </div>
          <div class="mb-2 flex items-center gap-5">
            <h1 class="text-xl font-medium text-primary">Lavozim:</h1>
            <p>
              {{ lead.position }}
            </p>
          </div>
          <div class="mb-2 flex items-center gap-5">
            <h1 class="text-xl font-medium text-primary">Korxona: </h1>
            <p>
              {{ lead.company }}
            </p>
          </div>
          <div class="mb-2 flex items-center gap-5">
            <h1 class="text-xl font-medium text-primary">Qo‘shimcha tel:</h1>
            <p>
              {{ lead.phone2 }}
            </p>
          </div>


          <hr class="my-5">

          <p>{{ lead.about }}</p>

          <div class="my-5">
            <div class="flex items-center gap-5">
              <h1 class="text-xl font-semibold text-primary">Mijoz qiziqishlari</h1>
              <button>
                <Icon class="text-2xl" icon="mdi:edit" />
              </button>
            </div>
            <div class="flex gap-2 my-5">

              <span class="py-1 px-2 bg-primary text-white rounded">web dasturlash</span>
              <span class="py-1 px-2 bg-primary text-white rounded">futbol</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2 ">
        <div class="h-[calc(100vh-180px)] flex flex-col justify-between">
          <div>

            <div class="flex items-center mb-3">
              <span class="border bg-primary flex-1"></span>
              <span class="bg-primary text-white py-1 text-center w-[150px] rounded-full">Mart</span>
              <span class="border bg-primary flex-1"></span>
            </div>
            <div class="flex items-center">
              <span class="border bg-primary flex-1"></span>
              <span class="bg-[#29A0E3] text-white py-1 text-center w-[150px] rounded-full">06.03.2024</span>
              <span class="border bg-primary flex-1"></span>
            </div>


            <div class="bg-white rounded mt-5 mb-2 p-3">
              <div class="flex items-center gap-2 text-gray-400">
                <span>06.03.2024 | 15:59</span>
                <span class="text-gray-500">Umidbek Jumaniyozov </span>
                <span> tomonidan bajarildi:</span>
              </div>
              <p>Telefonni ko’tarmadi</p>
            </div>
            <div class="bg-white rounded p-3">
              <div class="flex items-center gap-2 text-gray-400">
                <span>06.03.2024 | 15:59</span>
                <span class="text-gray-500">Umidbek Jumaniyozov </span>
                <span> tomonidan bajarildi:</span>
              </div>
              <p>Telefonni ko’tarmadi</p>
            </div>
          </div>
          <div>
            <div class="bg-white p-5 rounded">
              <textarea class="w-full min-h-20  focus:outline-none" name="" id=""></textarea>

              <div class="flex justify-end mt-5">
                <button class="mr-5 py-2 rounded text-white px-3 bg-primary">Topshiriq yaratish</button>
                <button class="py-2 rounded text-white px-3 bg-[#008E76]">Saqlash</button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>