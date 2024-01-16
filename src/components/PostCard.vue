<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { usePostStore } from '@/store/posts';

const postsStore = usePostStore();

const props = defineProps({
  post: Object
})

</script>
<template>
  <div>
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow ">

      <div class="mb-2 flex justify-between items-center">

        <h2 class=" line-clamp-1 text-2xl font-bold tracking-tight">{{ props.post.title }}</h2>
        <!-- <button>
          <Icon class="text-3xl" icon="majesticons:bookmark-line" />
        </button> -->
      </div>
      <p class="h-[120px] line-clamp-5 mb-5 font-light text-gray-500 dark:text-gray-400">{{ props.post.body }}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img v-if="postsStore.getUsersByPostUserId(props.post.userId)[0]"
            class="drop-shadow border w-10 h-10 rounded-full"
            :src="postsStore.getUsersByPostUserId(props.post.userId)[0].image" alt="Bonnie Green avatar" />
          <span v-if="postsStore.getUsersByPostUserId(props.post.userId)[0]" class="font-medium">
            {{ postsStore.getUsersByPostUserId(props.post.userId)[0].firstName }}
            {{ postsStore.getUsersByPostUserId(props.post.userId)[0].lastName }}
          </span>
        </div>
        <router-link :to="{ name: 'post-id', params: { id: props.post.id } }"
          class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </router-link>
      </div>
    </article>
  </div>
</template>



<style lang="scss" scoped></style>