import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@c/HelloWorld'
import index from '@c/index'
import articlecom from '@c/article/articlecom'
import detailscom from '@c/article/detailscom'
import login from "@c/user/login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/articlecom',
      name: 'articlecom',
      component: articlecom
    },
    {
      path: '/detailscom',
      name: 'detailscom',
      component: detailscom
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
