import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

function buildQueryParams(params: URLSearchParams) {
  const queryParams = new URLSearchParams(params)
  for (const [key, value] of queryParams.entries()) {
    if (value === null || value === undefined || value === '') {
      queryParams.delete(key)
    }
  }
  return queryParams
}

api.interceptors.request.use((config) => {
  if (config.params) {
    config.params = buildQueryParams(config.params)
  }

  return config
})
