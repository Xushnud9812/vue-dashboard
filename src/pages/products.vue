<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';
import ProductCard from '@/components/ProductCard.vue';
import Pagination from '@/components/Pagination.vue';
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useDebouncedRef } from '@/composables/debouncedRef.js'
const products = ref([])

const search = useDebouncedRef('', 1000)
const totalProducts = ref()
const currentPage = ref(1)
const totalPages = ref(1)
const from_page = ref(1)
const to_page = ref(10)
const fetchData = async () => {
  try {
    const response = await api.get(`products/${search.value ? `search?q=${search.value}&` : '?'}limit=10&skip=${currentPage.value * 10 - 10} `);
    products.value = response.data.products
    totalProducts.value = response.data.total
    totalPages.value = Math.ceil(response.data.total / response.data.limit)
    currentPage.value
    to_page.value = currentPage.value * products.value.length
    from_page.value = to_page.value - products.value.length + 1
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

        <h1 class="text-3xl font-medium">Mahsulotlar</h1>
        <div class="relative">
          <input v-model="search" placeholder="Izlash..." class="focus:outline-none w-96 border px-4 py-2 rounded"
            type="text">
          <Icon class="text-[#666] text-2xl absolute top-1/2 right-5 -translate-y-1/2" icon="gg:search" />
        </div>
      </div>
      <div v-if="products.length > 0" class="">

        <div class="grid grid-cols-5 gap-6">
          <product-card v-for="item, index in products" :key="index" :product="item" />
        </div>
        <div class="my-10">
          <Pagination :currentPage="currentPage" :totalItems="totalProducts" :totalPages="totalPages" :visiblePages="10"
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