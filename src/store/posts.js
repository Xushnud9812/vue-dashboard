import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
    users: [],
  }),
  actions: {
    setPosts(posts) {
      this.posts = posts
    },
    setUsers(users) {
      this.users = users
    },
    getUsersByPostUserId(postUserId) {
      return this.users.filter(user => user.id === postUserId);
    },
  }

})