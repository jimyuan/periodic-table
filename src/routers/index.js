import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('PAGES/Home')
const ElementDetail = () => import('PAGES/ElementDetail')
const router = new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/element',
    redirect: '/element/1'
  }, {
    path: '/element/:name',
    component: ElementDetail
  }]
})

export default router
