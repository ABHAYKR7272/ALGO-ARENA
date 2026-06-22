import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
  timeout: 10000,
})

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('arena_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Handle errors globally
api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const msg = err.response?.data?.message || 'Something went wrong'
    return Promise.reject(new Error(msg))
  }
)

export const leaderboardAPI = {
  getTop:    ()         => api.get('/leaderboard'),
  getPlayer: (username) => api.get(`/leaderboard/${username}`),
}

export const battleAPI = {
  saveResult: (data)   => api.post('/battle/result', data),
  getHistory: ()       => api.get('/battle/history'),
}

export default api
