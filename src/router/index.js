import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/pages/about.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/pages/users.vue')
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/pages/products.vue')
        },
        {
          path: '/todos',
          name: 'todos',
          component: () => import('@/pages/todos.vue')
        },
        {
          path: '/posts',
          name: 'posts',
          component: () => import('@/pages/posts/posts.vue')
        },
        {
          path: '/post/:id',
          name: 'post-id',
          component: () => import('@/pages/posts/postId.vue')
        },
      ],

    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/login.vue')
    }

  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.user) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
})

export default router