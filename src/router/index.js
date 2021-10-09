import Vue from 'vue'
import VueRouter from 'vue-router'

const Detail = () => import('../views/detail/Detail')

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
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
