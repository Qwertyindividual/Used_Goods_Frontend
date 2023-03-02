import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import ContactView from "../views/ContactView.vue"
import LoginView from "../views/LoginView.vue"
import productsView from "../views/productsView.vue"
import adminView from "../views/adminView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/products',
    name: 'products',
    component: productsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
