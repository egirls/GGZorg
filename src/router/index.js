import Router from 'vue-router'
import Vue from 'vue'


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
  {
    path: '/error404',
    name: 'Error404',
    component: () => import('../views/errorPage/Error404.vue')
  },
  {
    path: '*',
    redirect: '/error404'
  },
  {
    path: '/',
    component: () => import('../views/frame/index.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('../views/pages/Home.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'scientificResearch',
      name: 'ScientificResearch',
      component: () => import('../views/pages/ScientificResearch.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    }
    ]
  }
  ]
})
