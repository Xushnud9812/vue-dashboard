<script setup>
import { computed } from 'vue'
import TaskCard from '../../components/TaskCard.vue';

const tasks = [
  {
    id: "1",
    name: "Xushnudbek Ayitboyev",
    phone: '+99890 036 60 09',
    date: "2023-08-01 16:32",
    type: "today",
  },
  {
    id: "2",
    name: "Xushnudbek Ayitboyev",
    phone: '+99890 036 60 09',
    date: "2023-08-01 16:32",
    type: "week",
  },
  {
    id: "3",
    name: "Xushnudbek Ayitboyev",
    phone: '+99890 036 60 09',
    date: "2023-08-01 16:32",
    type: "expired",
  },
  {
    id: "4",
    name: "Xushnudbek Ayitboyev",
    phone: '+99890 036 60 09',
    date: "2023-08-01 16:32",
    type: "today",
  },
]


const todayTasks = computed(() => {
  return tasks.filter(item => item.type == 'today')
})
const weekTasks = computed(() => {
  return tasks.filter(item => item.type == 'week')
})
const expiredTasks = computed(() => {
  return tasks.filter(item => item.type == 'expired')
})

</script>

<template>
  <div>
    <div class="bg-white rounded p-5">
      <div class="flex justify-between mb-5">
        <h1 class="text-xl">Topshiriqlar</h1>
        <div class="flex gap-5">
          <p class="text-xl flex gap-2 items-center text-[#B0B7D7]">
            Barcha topshiriqlar <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">30</span>
          </p>
          <p class="text-xl flex gap-2 items-center text-[#B0B7D7]">
            Tugallangan topshiriqlar <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-[#008E76]/10 text-[#008E76]">30</span>
          </p>
          <p class="text-xl flex gap-2 items-center text-[#B0B7D7]">
            Bajarilmagan topshiriqlar <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff0000]/10 text-[#FF0000]">30</span>
          </p>
        </div>
        <div></div>
      </div>

      <div class="px-40 grid grid-cols-3 gap-10">
        <div class="flex flex-col items-center">
          <h1 class="flex items-center gap-2 my-5">Bugungi topshiriqlar
            <span class="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">12</span>
          </h1>
          <TaskCard class="w-full" :task="item" v-for="item in todayTasks" :key="item.id" />
        </div>
        <div class="flex flex-col items-center">
          <h1 class="flex items-center gap-2 my-5">Haftalik topshiriqlar
            <span class="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">12</span>
          </h1>
          <TaskCard class="w-full" :task="item" v-for="item in weekTasks" :key="item.id" />
        </div>
        <div class="flex flex-col items-center">
          <h1 class="flex items-center gap-2 my-5">Muddati o’tgan topshiriqlar
            <span class="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">12</span>
          </h1>
          <TaskCard class="w-full" :task="item" v-for="item in expiredTasks" :key="item.id" />
        </div>

      </div>
    </div>
  </div>
</template>

