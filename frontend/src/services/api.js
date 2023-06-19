import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:9001'
})

export default api