import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// src/components/people/tom-kelly-ii/Tom.vue

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tom-kelly-ii',
    name: 'Tom Kelly II',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "austin-hills" */ '../components/people/tom-kelly-ii/Tom.vue')
  },
  {
    path: '/mike-levis',
    name: 'Mike Levis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "austin-hills" */ '../components/people/mike-levis/Mike.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
