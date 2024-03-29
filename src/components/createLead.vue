<template>
  <div>
    <div @click="$emit('close')" class="fixed top-0 left-0 w-full h-screen bg-black/70 z-50"></div>
    <div class="fixed top-1/2 w-1/4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white z-50 p-5">
      <div class="mb-10 flex justify-between items-center">
        <h1>Lid yaratish</h1>
        <button @click="$emit('close')">
          <Icon icon="mdi:close" width="26" class="text-red-500" height="26" />
        </button>
      </div>






      <div class="grid  gap-3">
        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text" placeholder="F.I.O">
        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text"
          placeholder="Telefon raqami">

        <div>
          <select class="w-full px-5 py-3 focus:outline-none pr-12 bg-gray-100  rounded" name="" id="">
            <option value="">1</option>
            <option value="">2</option>
          </select>
        </div>

        <input class="w-full focus:outline-none pr-12 bg-gray-100 px-4 py-2 rounded" type="text"
          placeholder="Nimaga qiziqadi">
      </div>


      <div class="">
        <button @click="$emit('create')" class="w-full bg-[#166199] rounded py-2.5 px-5 mt-10 text-white ">
          Yaratish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>