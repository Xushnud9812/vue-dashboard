<script setup>
import { ref, watch, onMounted } from 'vue'
import { api } from '@/api'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue';

const route = useRoute()
const post = ref()

console.log('dsa', route.params.id)

const fetchData = async () => {
  try {
    const response = await api.get(`posts/${route.params.id}`);
    post.value = response.data
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
fetchData()
</script>

<template>
  <div>
    <div class="container">
      <router-link to="/posts"
        class="justify-start inline-flex items-center  bg-white gap-2 rounded  hover:text-primary p-2 mb-5">
        <Icon icon="ion:arrow-back" />
        Orqaga
      </router-link>
      <div class="bg-white p-5 rounded-md" v-if="post">

        <h1 class="text-2xl font-semibold ">

          {{ post.title }}
        </h1>

        <p class="my-8">{{ post.body }}</p>


        <div class="flex gap-2 ">
          <span class="border text-xs py-1 px-1 rounded-lg" v-for="item, index in post.tags" :key="index">{{ item
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>