import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddSellItem from '../views/AddSellItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>import('../components/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/itemDetail',
      name: 'itemDetail',
      component: () => import('../views/ItemDetail.vue')
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: ()=> import('../views/UserInfo.vue')
    },
    {
      path: '/addSellItem',
      name: 'addSellItem',
      component: AddSellItem
    }
  ]
})

export default router
