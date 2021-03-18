import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    allMessage: (state) => {
      return state.tableData
    },
    userRole: (state) => {
      return state.userRole
    }
  },
  mutations: {

  },
  actions: {

  }
})