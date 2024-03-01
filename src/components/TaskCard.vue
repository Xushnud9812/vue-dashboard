<script setup>
import { computed } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    default: () => ({})
  }
})

const borderColor = computed(() => {
  if (props.task.type == 'today') return '#166199'
  if (props.task.type == 'week') return '#008E76'
  if (props.task.type == 'expired') return '#FF5252'
})



</script>


<template>
  <div>
    <div :style="`border-color: ${borderColor}`"
      class="bg-[#F7F7FA] border-l-8  shadow group rounded px-3 pt-3 pb-5 mb-5  ">
      <div class="flex justify-between items-start">
        <h2 class="basis-4/5">
          {{ props.task.name }}
        </h2>
      </div>
      <h2 class="basis-4/5">
        {{ props.task.phone }}
      </h2>
      <div class="flex mt-4 justify-between items-center">
        <span class="text-sm text-gray-600">{{ props.task.date }}</span>

      </div>
    </div>
  </div>
</template>

