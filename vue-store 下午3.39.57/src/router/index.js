import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    // {
    //   name: 'Home',
    //   path: '/index',
    //   component: Home
    // }
  ]
})
