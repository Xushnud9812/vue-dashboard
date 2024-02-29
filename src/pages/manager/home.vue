
<template>
    <div class="">
        <div class="grid grid-cols-7 gap-7">

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-white">
                <span>
                    <Icon class="text-5xl text-[#166199]" icon="mdi:leads-outline" />
                </span>
                <p class="text-xs text-[#166199] mb-1.5 mt-1">Lidlar</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#166199]">100 <span
                            class="text-[#166199]">ta</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-white">
                <span>
                    <Icon class="text-5xl text-[#166199]" icon="ph:student-fill" />
                </span>
                <p class="text-xs text-[#166199] mb-1.5 mt-1">O'quvchilar</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#166199]">100 <span
                            class="text-[#166199]">ta</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-white">
                <span>
                    <Icon class="text-5xl text-[#166199]" icon="formkit:group" />
                </span>
                <p class="text-xs text-[#166199] mb-1.5 mt-1">Guruhlar</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-[#166199]">100 <span
                            class="text-[#166199]">ta</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-[#fb7185]">
                <span>
                    <Icon class="text-5xl text-white" icon="tdesign:money" />
                </span>
                <p class="text-xs text-white mb-1.5 mt-1">Qarzdorlar</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span
                            class="text-white">ta</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-[#0d9488]">
                <span>
                    <Icon class="text-5xl text-white" icon="solar:hand-money-linear" />
                </span>
                <p class="text-xs text-white mb-1.5 mt-1">To'lovlar</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span
                            class="text-white">ta</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-[#0891b2]">
                <span>
                    <Icon class="text-5xl text-white" icon="healthicons:money-bag" />
                </span>
                <p class="text-xs text-white mb-1.5 mt-1">Oylik tushum</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100000000 <span
                            class="text-white">so'm</span></h2>
                </div>
            </div>

            <div class="flex flex-col items-center  rounded-lg p-3 border-1 border-[#166199] bg-[#0284c7]">
                <span>
                    <Icon class="text-5xl text-white" icon="grommet-icons:money" />
                </span>
                <p class="text-xs text-white mb-1.5 mt-1">Rejalashtirilgan tushum</p>
                <div>

                    <h2 class="flex items-center gap-1.5 text-xl font-bold text-white">100 <span
                            class="text-white">so'm</span></h2>
                </div>
            </div>




        </div>
        <div class="mb-20 mt-5 flex">
            <div class="bg-white grow rounded-lg  p-6 mr-2 border-1 border-[#2e5bff14]">
                <h3 class="font-semibold text-sky-700">Sotuv voronkasi</h3>
                <div>
                    <Chart />
                </div>
            </div>
            <div class="bg-white grow rounded-lg p-6  ml-2 border-1 border-[#2e5bff14]">
                <h3 class="font-semibold text-sky-700">Ichki topshiriqlar ro'yhati</h3>
                <div>2</div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import Chart from '../../components/Chart.vue';
import { Icon } from '@iconify/vue';
</script>
  
<style lang="scss" scoped></style>