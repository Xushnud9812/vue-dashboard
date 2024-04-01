<script setup >
import draggable from "vuedraggable";
import { Icon } from '@iconify/vue';
import { useKanbanStore } from "@/store/lead";
import router from "../router";

const kanban = useKanbanStore();

const props = defineProps({
  column: {
    type: Object,
    default: () => ({}),
  },
});



const deleteTask = (taskId) => {
  kanban.deleteTask(taskId);
};

const openLead = () => {
  router.push('/lead-details')
}

const log = (e) => {
  console.log('ads', e);
}
const finish = (e, lists) => {
  console.log('ads', e, lists);
}

</script>
<template>
  <div>
    <!-- <pre>{{ props.column }}</pre> -->
    <draggable class="dragArea list-group" @end="finish($event, props.column.tasks)" @change="log"
      :list="props.column.tasks" :animation="200" ghost-class="ghost-card" :group="{ name: 'kanban' }" item-key="id">
      <template #item="{ element }">
        <div @click="openLead" :style="`border-color: ${props.column.color}`"
          class="bg-white border-l-8  shadow group rounded px-3 pt-3 pb-5 mb-5  cursor-pointer">
          <div class="flex justify-between items-start">
            <h2 class="basis-4/5">
              {{ element.name }}
            </h2>

            <div class="flex gap-x-1 items-center">
              <button @click="deleteTask(element.id)">
                <Icon icon="gg:trash" class=" h-5 w-5 text-red-500 cursor-pointer" width="26" height="26" />
              </button>
            </div>
          </div>

          <h2 class="basis-4/5">
            {{ element.phone }}
          </h2>
          <div class="flex mt-4 justify-between items-center">
            <span class="text-sm text-gray-600">{{ element.date }}</span>
            <span class="bg-primary text-white py-1 px-2 rounded-md text-sm">{{
              element.type
            }}</span>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>