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
          path: '/leads',
          name: 'leads',
          component: () => import('@/pages/call-center/leads.vue')
        },
        {
          path: '/groups',
          name: 'groups',
          component: () => import('@/pages/groups.vue')
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: () => import('@/pages/tasks.vue')
        },
        {
          path: '/manager',
          name: 'manager',
          component: () => import('@/pages/manager/home.vue')
        },
      ],
    },
    // {
    //   path: '/manager',
    //   component: () => import('@/layouts/default.vue'),
    //   meta: { requiresAuth: true },
    //   children:[
    //     {
    //       path: '/',
    //       name: 'manager',
    //       component: () => import('@/pages/manager/home.vue')
    //     },
    //   ]
    // },
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