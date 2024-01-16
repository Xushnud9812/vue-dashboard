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

const fetchData = async () => {
  try {
    const response = await api.get(`users/${search.value ? `search?q=${search.value}&` : '?'}limit=10&skip=${currentPage.value * 10 - 10} `);
    users.value = response.data.users
    totalUsers.value = response.data.total
    totalPages.value = Math.ceil(response.data.total / response.data.limit)
    currentPage.value

  } catch (error) {
    console.error('Error occurred:', error);
  }
};

fetchData()
const router = useRouter()


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
    <div class="">
      <div>
        <div class="overflow-x-auto bg-white sm:rounded-lg">
          <div class="p-6 flex items-center justify-between mb-10">
            <h1 class="text-xl text-[#29A0E3] font-medium">Foydalanuvchilar</h1>
            <div class="flex items-center gap-2">
              <button class="flex  items-center text-[#29A0E3]">
                Eksport excel
                <Icon class="text-3xl" icon="material-symbols:download" />
              </button>
              <div class="relative">
                <input v-model="search" placeholder="Search..."
                  class="focus:outline-none w-72 pr-12 border px-4 py-2 rounded" type="text">
                <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
              </div>
              <button class="bg-[#29A0E31A] py-2.5 px-8 rounded flex  items-center text-[#29A0E3]">
                Filter
              </button>
              <button class="bg-[#29A0E31A] rounded py-2.5 px-5 flex gap-1 items-center text-[#29A0E3]">
                <Icon class="text-lg" icon="ep:plus" />
                Qo'shish
              </button>
            </div>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700   ">
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
            <tbody v-if="users.length > 0">
              <tr v-for="item, index in users" :key="index" class=" border-b  hover:bg-gray-50 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {{ (currentPage - 1) * 10 + index + 1 }}
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
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
              </tr>

            </tbody>
          </table>
          <div v-if="users.length == 0" class="my-5">
            <h1 class="text-center text-xl text-gray-500">Ma'lumot topilmadi!</h1>
          </div>
        </div>

        <div v-if="users.length > 0" class="my-10">
          <Pagination :currentPage="currentPage" :totalItems="totalUsers" :totalPages="totalPages" :visiblePages="10"
            @change="goToPage" @next-page="currentPage++" @previous-page="currentPage--" :to_page="to_page"
            :from_page="from_page" />
        </div>
      </div>







    </div>
  </div>
</template>



<style lang="scss" scoped></style>