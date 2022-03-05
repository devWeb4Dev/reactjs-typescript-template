import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-dev.samisaude.com.br/v2',
})

export default api
