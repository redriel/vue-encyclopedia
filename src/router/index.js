import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/areas',
    name: 'Areas',
    component: () => import('../views/Areas.vue')
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('../views/Items.vue')
  },
  {
    path: '/quests',
    name: 'Quests',
    component: () => import('../views/Quests.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
