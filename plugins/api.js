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

export const fetchUserNotTodos = async jwt => {
  const api = apiWrapper(jwt)
  return await api.get(`${apiUrl}/users/self/tasks`)
}

export const createNotTodo = async jwt => {
  const api = apiWrapper(jwt)
  return await api.post(`${apiUrl}/tasks`, {
    content: 'aaa'
  })
}
