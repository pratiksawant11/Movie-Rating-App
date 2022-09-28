import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '../components/Footer'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Footer',
    name: 'Footer',
    component: Footer
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
