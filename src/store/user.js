import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    tokens: {
      accessToken : null,
      refreshToken : null,
    }
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    setToken(tokens) {
      this.tokens = tokens
    },
    logout() {
      this.user = null
    },
  },
  persist: true,
})