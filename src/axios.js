import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: '18531529636_1593933535851'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
