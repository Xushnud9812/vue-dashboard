<script setup>
import { ref, watch } from 'vue'

const currentPage = ref(1)

const fetchData = async () => {
  try {
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
const props = defineProps(['payment'])

watch(() => props.data, () => {
  fetchData()
}, { immediate: true })


fetchData()

</script>

<template>
  <div>
    <div class="">
      <div>
        <div class="overflow-x-auto bg-white sm:rounded-lg py-5">
          <table class="w-full text-sm rtl:text-right">
            <thead class="text-sm text-gray-700">
              <tr>
                <th class="px-6 py-3 text-center">#</th>
                <th class="px-6 py-3 text-center">O'quvchi</th>
                <th class="px-6 py-3 text-center">
                  Umumiy to'lov summasi
                </th>
                <th class="px-6 py-3 text-center">Qarzdorlik summasi</th>
                <th class="px-6 py-3 text-center">Joriy to'lov</th>
                <th class="px-6 py-3 text-center">To'lov sanasi</th>
                <th class="px-6 py-3 text-center">Amal</th>
              </tr>
            </thead>
            <tbody class="text-base" v-if="props.payment.length > 0">
              <tr v-for="item, index in props.payment" :key="index" class=" border-b hover:bg-gray-50 m-5">
                <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap text-center ">
                  {{ (currentPage - 1) * 10 + index + 1 }}
                </th>
                <td class="px-6 py-2 ">
                  {{ item.full_name }}
                </td>
                <td class="px-6 py-2 text-center">
                  {{ item.full_pay.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm
                </td>
                <td class="px-6 py-2 text-center">
                  <span v-if="item.qarz - item.amount != 0" class="text-red-600">{{ (item.qarz - item.amount).toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                    so'm</span>
                  <span v-if="item.qarz - item.amount == 0">-</span>
                </td>
                <td class="px-6 py-2 text-center">
                  <span class="text-green-600">{{ item.amount.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} so'm</span>
                </td>

                <td class="px-6 py-2 text-center">
                  {{ item.payment_date }}
                </td>
                <td class="px-6 py-2 flex items-center justify-end gap-2">
                  <button class="p-2 rounded-md bg-[#29A0E31A] text-[#29A0E3] text-base">
                    To'lov grafigini yuklash
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="props.payment.length == 0" class="my-5">
            <h1 class="text-center text-xl text-gray-500">Ma'lumot topilmadi!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
