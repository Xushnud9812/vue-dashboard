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







</script>

<template>
  <div>
    <div class="">
      <div>
        <div class="overflow-x-auto bg-white sm:rounded-lg py-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-sm text-gray-700   ">
              <tr>
                <th class="px-6 py-3   ">#</th>
                <th class="px-6 py-3   ">O'quvchi kodi</th>
                <th class="px-6 py-3  ">
                  O'quvchi
                </th>
                <th class="px-6 py-3  ">Telefon</th>
                <th class="px-6 py-3  ">Loyiha</th>
                <th class="px-6 py-3  ">Status</th>
                <th class="px-6 py-3  text-right">Amal</th>
              </tr>
            </thead>
            <tbody class="text-lg" v-if="users.length > 0">
              <tr v-for="item, index in users" :key="index" class=" border-b  hover:bg-gray-50 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {{ (currentPage - 1) * 10 + index + 1 }}
                </th>
                <td class="px-6 py-4">
                  132-10/2023
                </td>
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
                  {{ item.birthDate }}
                </td>
                <td class="px-6 py-4 flex items-center justify-end gap-2">
                  <button class="p-2 rounded-md bg-[#29A0E31A] text-[#29A0E3] text-xl">
                    Shartnomani yuklash
                  </button>
                  <button class="font-medium p-2  bg-red-500/20 rounded-md text-center">
                    <Icon class="text-2xl text-red-500" icon="ph:trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="users.length == 0" class="my-5">
            <h1 class="text-center text-xl text-gray-500">Ma'lumot topilmadi!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


