import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "vote" */ '@/views/Vote.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
    },
    {
      path: '/Score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ '@/views/Score.vue')
    }
  ]
})
