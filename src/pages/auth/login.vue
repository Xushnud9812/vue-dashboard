<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/api'
import { useUserStore } from '@/store/user';


const userStore = useUserStore()
const router = useRouter()

const formData = ref({
  username: "",
  password: "",
});

const errorMessage = ref('');


const login = async () => {
  try {
    const response = await api.post('/auth/login', formData.value);
    if (response.status === 200) {
      userStore.setUser(response.data)
      console.log(response.data)
      router.push('/')
    } else {
      errorMessage.value = 'Invalid credentials. Please try again.';
    }
  } catch (error) {
    errorMessage.value = 'Login yoki parol xato';
  }
};

</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="w-[380px]">

      <div class="bg-white rounded-lg p-8">
        <h1 class="mb-10 font-bold text-2xl text-[#28293D]">Kirish</h1>
        <div class="mb-2">
          <p>
            username: 'kminchelle',
          </p>
          <p>
            password: '0lelplR',
          </p>
        </div>
        <form @submit.prevent="login" class="flex flex-col gap-6">
          <div>
            <h2 class="text-xs font-medium uppercase mb-2">Login </h2>
            <input
              class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-[#E0E7FF33] focus:border-primary focus:outline-none"
              placeholder="FISH" v-model="formData.username" type="text" />
          </div>
          <div>
            <h2 class="text-xs font-medium uppercase mb-2">PAROL </h2>
            <input
              class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-[#E0E7FF33] focus:border-primary focus:outline-none"
              placeholder="••••••••••" type="password" v-model="formData.password" />
          </div>
          <div>
            <!-- <Checkbox /> -->
          </div>
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          <div>
            <button class="bg-primary px-4 py-3 text-white rounded w-full">Kirish</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>