import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
