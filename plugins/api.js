import axios from 'axios'
import { apiUrl } from '~/config/config'

const apiWrapper = jwt => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const fetchUserTasks = async (jwt, page) => {
  const api = apiWrapper(jwt)
  console.log(page)
  return await api.get(`${apiUrl}/users/self/tasks?page=${page}`)
}

export const createTask = async (jwt, body) => {
  const api = apiWrapper(jwt)
  return await api.post(`${apiUrl}/tasks`, body)
}
