import { createRouter, createWebHistory } from 'vue-router';
// import Nprogress from 'nprogress';

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  // 权限等判断...
  // Nprogress.start();
  // 路由不存在跳转home
  if (!to.matched.length) {
    next('/');
  }
  next();
});

router.afterEach(() => {
  // Nprogress.done();
});

export default router;