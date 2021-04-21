import Router from 'vue-router'
import Vue from 'vue'


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
  {
    path: '/logIn',
    name: 'LogIn',
    component: () => import('../views/pages/LogIn.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/pages/SignIn.vue')
  },
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
    },{
      path: 'docterG',
      name: 'DocterG',
      component: () => import('../views/pages/DocterG.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'member',
      name: 'Member',
      component: () => import('../views/pages/Member.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'papers',
      name: 'Papers',
      component: () => import('../views/pages/Papers.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'detailPaper',
      name: 'DetailPaper',
      component: () => import('../views/pages/DetailPaper.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'news',
      name: 'News',
      component: () => import('../views/pages/News.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'aNews',
      name: 'APieceOfNews',
      component: () => import('../views/pages/APieceOfNews.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    },{
      path: 'editNews',
      name: 'EditNews',
      component: () => import('../views/pages/EditNews.vue'),
      beforeEnter(to, from, next) {
        next()
      }
    }
    ]
  }
  ]
})
