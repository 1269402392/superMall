import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import("views/home/Home")
  },
  {
    path: '/category',
    component: () => import("views/category/CateGory")
  },
  {
    path: '/profile',
    component: () => import("views/profile/Profile")
  },
  {
    path: '/shopcart',
    component: () => import("views/shopcart/ShopCart")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
