import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebar: true,
  }),
  actions: {
    changeSidebar() {
      this.isSidebar = !this.isSidebar
    },
  },
  persist: true,
})