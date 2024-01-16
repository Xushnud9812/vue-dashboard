<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';
import Pagination from '@/components/Pagination.vue';
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useDebouncedRef } from '@/composables/debouncedRef.js'

const users = ref([])

const search = useDebouncedRef('', 1000)
const totalUsers = ref()
const currentPage = ref(1)
const totalPages = ref(1)
const from_page = ref(1)
const to_page = ref(10)
const fetchData = async () => {
  try {
    const response = await api.get(`users/${search.value ? `search?q=${search.value}&` : '?'}limit=10&skip=${currentPage.value * 10 - 10} `);
    users.value = response.data.users
    totalUsers.value = response.data.total
    totalPages.value = Math.ceil(response.data.total / response.data.limit)
    currentPage.value
    to_page.value = currentPage.value * users.value.length
    from_page.value = to_page.value - users.value.length + 1
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

fetchData()
const router = useRouter()
const handleClick = () => {
  router.push('/sponsor/1')
}

watch(currentPage, () => {
  fetchData()
})
watch(search, () => {
  fetchData()
})


const goToPage = (page) => {
  currentPage.value = page;
}


</script>

<template>
  <div>
    <div class="container">
      <div class="flex items-center justify-between mb-10">

        <h1 class="text-3xl font-medium">Users</h1>
        <div class="relative">
          <input v-model="search" placeholder="Search..." class="focus:outline-none w-96 border px-4 py-2 rounded"
            type="text">
          <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
        </div>
      </div>

      <div v-if="users">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700  bg-gray-50  ">
              <tr>
                <th class="px-6 py-3  ">#</th>
                <th class="px-6 py-3 ">
                  Full Name
                </th>
                <th class="px-6 py-3 ">Phone</th>
                <th class="px-6 py-3 ">Email</th>
                <th class="px-6 py-3 ">Ip</th>
                <th class="px-6 py-3 ">Username</th>
                <th class="px-6 py-3 ">Birth Date</th>
                <th class="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item, index in users" :key="index" class="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {{ currentPage * 5 + index }}
                </th>
                <td class="px-6 py-4">
                  {{ item.firstName }}
                  {{ item.lastName }}
                </td>
                <td class="px-6 py-4">
                  {{ item.phone }}
                </td>
                <td class="px-6 py-4">
                  {{ item.email }}
                </td>
                <td class="px-6 py-4">
                  {{ item.ip }}
                </td>
                <td class="px-6 py-4">
                  {{ item.username }}
                </td>
                <td class="px-6 py-4">
                  {{ item.birthDate }}
                </td>
                <td class="px-6 py-4 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div class="my-10">
          <Pagination :currentPage="currentPage" :totalItems="totalUsers" :totalPages="totalPages" :visiblePages="10"
            @change="goToPage" @next-page="currentPage++" @previous-page="currentPage--" :to_page="to_page"
            :from_page="from_page" />
        </div>
      </div>


      <div v-else class="my-5">
        <h1 class="text-center text-xl text-gray-500">Ma'lumot topilmadi!</h1>
      </div>




    </div>
  </div>
</template>



<style lang="scss" scoped></style>