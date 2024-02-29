import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/pages/home.vue')
        },
        {
          path: '/about',
          name: 'abput',
          component: () => import('@/pages/about.vue')
        }
      ]
    },

  ]
})

export default router