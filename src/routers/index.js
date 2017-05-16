import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: resolve => require(['PAGES/Home'], resolve)
  }]
})

export default router
