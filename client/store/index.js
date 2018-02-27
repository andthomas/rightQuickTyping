import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  backSpaceRecord: [],
  accuracyRecord: [],
  wpmRecord: [],
}

const mutations = {
  ADDBACKSPACE (state, data) {
    state.backSpaceRecord.push(data)
  },
  ADDACCURACY (state, data) {
    state.accuracyRecord.push(data)
  },
  ADDWPM (state, data) {
    state.wpmRecord.push(data)
  },
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
})

const getters = {
  getState: state => state.accuracyRecord
}

export default store
