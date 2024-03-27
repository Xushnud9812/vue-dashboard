
<template>
  <div class="">
    <div class="grid grid-cols-5 gap-7">

    
        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#166199]">
          <span>
            <Icon class="text-5xl text-white" icon="mdi:leads-outline" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Yangi lidlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#0d9488]">
          <span>
            <Icon class="text-5xl text-white" icon="clarity:tasks-line" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Bugungi topshiriqlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#fb7185]">
          <span>
            <Icon class="text-5xl text-white" icon="streamline:strategy-tasks" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Bajarilmagan topshiriqlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#2563eb]">
          <span>
            <Icon class="text-5xl text-white" icon="icon-park-outline:plan" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Oylik reja</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>

        <div class="flex items-center gap-4 rounded-lg p-6 border-1 border-[#166199] bg-[#0891b2]">
          <span>
            <Icon class="text-5xl text-white" icon="formkit:group" />
          </span>
          <div>
            <p class="text-xs text-white mb-1.5">Yangi guruhlar</p>
            <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span class="text-white">ta</span></h2>
          </div>
        </div>


    </div>
    <div class="mb-20 mt-5 flex">
      <div class="bg-white grow rounded-lg  p-6 mr-2 border-1 border-[#2e5bff14]">
        <h3 class="font-semibold text-sky-700">Sotuv voronkasi</h3>
        <div><Chart /></div>
      </div>
      <div class="bg-white grow rounded-lg p-6  ml-2 border-1 border-[#2e5bff14]">
        <h3 class="font-semibold text-sky-700">Ichki topshiriqlar ro'yhati</h3>
        <div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-base text-gray-700  text-center">
              <tr>
                <th class="px-6 py-3">Topshiriq nomi</th>
                <th class="px-6 py-3">Bajarish muddati</th>
                <th class="px-6 py-3">Holat</th>              
              </tr>
            </thead>
        
            <tbody class="text-center">
              <tr 
                class=" border-b text-gray-900 font-medium hover:bg-gray-50 ">
                <td scope="row" class="px-6 py-4">
                   Topshiriq mazmuni
                </td>
                <td class="px-6 py-4">
                 01.03.2024
                </td>
                <td class="px-6 py-4">
                  <span class="text-red-500 font-medium">Bajarilmagan</span>
                </td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from '../components/Chart.vue';
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped></style>