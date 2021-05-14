import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../views/App.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/',
    name: 'App',
    component: App
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
