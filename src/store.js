import { auth } from '@/firebase'

const state = {
  user: null
}

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

const actions = {
  init({ commit }) {
    auth.onAuthStateChanged(user => {
      commit('setUser', user)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
