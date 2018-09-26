import {
  fetchAuthUserTasks,
  fetchTimelineTasks,
  fetchUserTasks,
  createTask,
} from '~/plugins/api'
import trace from '~/plugins/trace'

export const state = () => ({
  list: [],
  totalCount: 0,
  perPage: 10,
})

export const actions = {
  async fetch({ commit, rootState }, page) {
    const jwt = rootState.authUser.jwt
    const { data } = await fetchAuthUserTasks(jwt, page)
    trace(data)

    commit('set', data)
  },
  async fetchTimeline({ commit }, page) {
    const jwt = ''
    const { data } = await fetchTimelineTasks(jwt, page)
    trace(data)

    commit('set', data)
  },
  async fetchUser({ commit }, { page, id }) {
    const jwt = ''
    const { data } = await fetchUserTasks(jwt, { page: page, id: id })
    trace(data)

    commit('set', data)
  },
  async add({ commit, rootState }, body) {
    const jwt = rootState.authUser.jwt

    await createTask(jwt, body)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },
}

export const mutations = {
  set(state, { records, total_record, limit }) {
    trace(records)
    trace(total_record)
    trace(limit)
    state.list = records
    state.totalCount = total_record
    state.perPage = limit
  },
}
