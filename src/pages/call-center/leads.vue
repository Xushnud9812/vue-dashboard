<script setup >
import { ref } from "vue";
import LeadCard from "@/components/LeadCard.vue";
import { useKanbanStore } from "@/store/lead";

const kanbanStore = useKanbanStore();

const isCreateModal = ref(false);
const columnTitle = ref("");

const createTask = (title) => {
  columnTitle.value = title;
  isCreateModal.value = true;
};
</script>

<template>
  <div class="flex gap-x-5">
    <div class="w-1/4 rounded overflow-hidden" v-for="column in kanbanStore.columns">
      <div class="bg-white  p-5 flex items-center justify-between">
        <h1>{{ column.title }} <span class="bg-primary px-2 text-white ml-2 rounded-full">{{ column.tasks.length }}</span>
        </h1>
        <button v-if="column.title == 'Yangi lidlar'" @click="createTask(column.title)"
          class="bg-primary text-white py-1  rounded px-2">
          + Yangi lid qo'shish
        </button>
      </div>
      <div class="p-5 bg-slate-300">
        <LeadCard :column="column" />
      </div>
    </div>
  </div>
</template>