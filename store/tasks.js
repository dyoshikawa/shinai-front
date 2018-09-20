import {
  fetchAuthUserTasks,
  fetchTimelineTasks,
  createTask
} from '~/plugins/api'

export const state = () => ({
  list: [],
  totalCount: 0,
  perPage: 10
})

export const actions = {
  async fetch({ commit, rootState }, page) {
    const jwt = rootState.user.jwt
    const { data } = await fetchAuthUserTasks(jwt, page)
    console.log(data)

    commit('set', data)
  },
  async fetchTimeline({ commit }, page) {
    const jwt = ''
    const { data } = await fetchTimelineTasks(jwt, page)
    console.log(data)

    commit('set', data)
  },
  async add({ commit, rootState }, body) {
    const jwt = rootState.user.jwt

    await createTask(jwt, body)

    const { data } = await fetchAuthUserTasks(jwt)
    console.log(data)

    commit('set', data)
  }
}

export const mutations = {
  set(state, { records, total_record, limit }) {
    console.log(records)
    console.log(total_record)
    console.log(limit)
    state.list = records
    state.totalCount = total_record
    state.perPage = limit
  }
}
