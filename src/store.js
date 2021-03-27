import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[
      {newsId:'1',img:'/images/banner6.jpeg',info:'测井和钻井技术'},
      {newsId:'2',img:'/images/banner4.jpeg',info:'地球物理研发'},
      {newsId:'3',img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
      {newsId:'4',img:'/images/banner6.jpeg',info:'测井和钻井技术'},
      {newsId:'5',img:'/images/banner4.jpeg',info:'地球物理研发'},
      {newsId:'6',img:'/images/banner5.jpeg',info:'数据科学和人工智能'},
    ],
    aNews: '',
    userMes: null,
    papers:[
      {paperId:'00000001',paperIntro:'测井和钻井技术'},
      {paperId:'00000002',paperIntro:'地球物理研发'},
      {paperId:'00000003',paperIntro:'数据科学和人工智能'},
      {paperId:'00000004',paperIntro:'测井和钻井技术'},
      {paperId:'00000005',paperIntro:'地球物理研发'},
      {paperId:'00000006',paperIntro:'数据科学和人工智能'},
    ],
    paperD:''
  },
  getters: {
    aNews: (state) => {
      return state.aNews
    },
    news: (state) => {
      return state.news
    },
    userMes: (state) => {
      return state.userMes
    },
    papers: (state) => {
      return state.papers
    },
    paperD: (state) => {
      return state.paperD
    },
  },
  mutations: {
    changeANews (state, aNews) {
      // 变更状态
      state.aNews = aNews
    },
    changeNews (state, news) {
      // 变更状态
      state.news = news
    },
    changeUserMes (state, userMes) {
      // 变更状态
      state.userMes = userMes
    },
    changePaperD (state, paperD) {
      // 变更状态
      state.paperD = paperD
    }
  },
  actions: {

  }
})