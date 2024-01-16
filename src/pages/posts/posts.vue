<script setup>
import { Icon } from '@iconify/vue';

import PostCard from '@/components/PostCard.vue';
import { ref, watch, onMounted } from 'vue'
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useDebouncedRef } from '@/composables/debouncedRef.js'
import { usePostStore } from '@/store/posts';

const postsStore = usePostStore();
const newPosts = ref([])
const search = useDebouncedRef('', 1000)
const limit = ref(4)
const skip = ref(0)

const fetchData = async () => {
  try {
    const response = await api.get(`posts/${search.value ? `search?q=${search.value}&` : '?'}limit=${limit.value}&skip=${skip.value}`);
    newPosts.value = response.data.posts
    postsStore.setPosts([...postsStore.posts, ...newPosts.value]);
    const userIds = newPosts.value.map(post => post.user_id);
    await loadUsers();
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

const loadUsers = async () => {
  try {
    const response = await api.get(`users?limit=100`);
    postsStore.setUsers(response.data.users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


onMounted(async () => {
  await fetchData()
});

const more = () => {
  skip.value += 4
  fetchData()
}

watch(search, () => {
  postsStore.setPosts([]);
  fetchData()
})




</script>

<template>
  <div>
    <div class="container">
      <div class="flex items-center justify-between mb-10">

        <h1 class="text-3xl font-medium">Postlar</h1>
        <div class="relative">
          <input v-model="search" placeholder="Izlash..." class="focus:outline-none w-96 border px-4 py-2 rounded"
            type="text">
          <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6  ">
        <post-card class=" " v-for=" item, index in postsStore.posts" :key="index" :post="item" />
      </div>

      <div class="flex justify-center my-5">
        <button @click="more" class="bg-primary py-2 px-12 rounded text-white">More</button>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>