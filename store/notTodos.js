import axios from 'axios'
import { apiUrl } from '~/config/config'

export const state = () => ({
  list: []
})

export const actions = {
  async fetch({ commit }) {
    commit('set', await axios.get(`${apiUrl}/api/self/not-todos`))
  }
}

export const mutations = {
  set(state, notTodos) {
    console.log(notTodos)
    state.list = notTodos
  }
}
