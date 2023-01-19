import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Search',
      component: HomeView
    },
    {
      path: '/popular',
      name: 'Popular',
      component: () => import('../views/Popular.vue')
    },
  ]
})

export default router
