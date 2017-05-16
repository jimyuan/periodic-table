import Vue from 'vue'
import Vuex from 'vuex'
import periodicTable from 'periodic-table/data.json'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    periodicTable
  },
  mutations: {
  }
})
