<script setup>
import { ref } from "vue";
import LeadCard from "@/components/LeadCard.vue";
import { useKanbanStore } from "@/store/lead";
import createLead from '@/components/createLead.vue';
import { api } from '@/api'

const kanbanStore = useKanbanStore();

const isCreateModal = ref(false);
const columnTitle = ref("");
const isAddModal = ref(false)

const leads = ref([
  {
    title: "Yangi lidlar",
    color: '#166199',
    tasks: []
  },
  {
    title: "Saralangan",
    color: '#008E76',
    tasks: []
  },
  {
    title: "Kursga yozilgan",
    color: '#FFAA00',
    tasks: []
  },
  {
    title: "To'lov qilgan",
    color: '#00AEED',
    tasks: []
  }
])
const getNewLeads = async () => {
  try {
    const response = await api.get(`/lead/get-lead?limit=10&action=0&page=1`);
    leads.value[0].tasks = response.data.leads

  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const getSortLeads = async () => {
  try {
    const response = await api.get(`/lead/get-lead?limit=10&action=1&page=1`);
    leads.value[1].tasks = response.data.leads

  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const getGroupLeads = async () => {
  try {
    const response = await api.get(`/lead/get-lead?limit=10&action=2&page=1`);
    leads.value[2].tasks = response.data.leads

  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const getPayLeads = async () => {
  try {
    const response = await api.get(`/lead/get-lead?limit=10&action=3&page=1`);
    leads.value[3].tasks = response.data.leads

  } catch (error) {
    console.error('Error occurred:', error);
  }
};
getNewLeads()
getSortLeads()
getGroupLeads()
getPayLeads()



const createTask = (title) => {
  columnTitle.value = title;
  isCreateModal.value = true;
  isAddModal.value = true
};

const leadCreate = () => {
  isAddModal.value = false
  getNewLeads()
}
</script>

<template>
  <createLead v-if="isAddModal" @create="leadCreate" @close="isAddModal = false" />

  <div class="flex gap-x-5">
    <div class="w-1/4 rounded overflow-hidden" v-for="column in leads">
      <div class="bg-white  p-5 flex items-center justify-between">
        <h1>{{ column.title }} <span class="bg-primary px-2 text-white ml-2 rounded-full">{{ 'i'
        }}</span>
        </h1>
        <button v-if="column.title == 'Yangi lidlar'" @click="createTask(column.title)"
          class="bg-primary text-white py-1  rounded px-2">
          + Yangi lid qo'shish
        </button>
      </div>
      <div class="p-5 bg-slate-300">
        <LeadCard :column="column"/>
      </div>
    </div>
  </div>
</template>