import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', redirect: '/home'},
        {
          path: 'home',
          name: 'Home',
          component: () => import("../views/Home.vue")
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import("../views/Settings.vue")
        },
        {
          path: 'test',
          name: 'Test',
          component: () => import("../views/Test.vue")
        },
      ]
    }
  ],
});

export default router;