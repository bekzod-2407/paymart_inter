import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import routes from './routes'
import publicRoutes from './public'

const allRoutes = [
  ...publicRoutes,
  ...routes
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: allRoutes
})

router.beforeEach((to, from, next) => {
  if (!store.getters['auth/isAuthenticated'] && to.meta?.protected) {
    next({ name: 'auth' })
  } else {
    next();
  }
})   

export default router
