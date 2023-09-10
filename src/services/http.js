import Request from 'luch-request'
const http = new Request({
  baseURL: 'https://www.uinav.com/'
})

// 请求拦截器
http.interceptors.request.use((request) => {
  uni.showLoading({
    title: '数据请求中...'
  })
  request.header = {
    ...request.header,
    Authorization: uni.getStorageSync('token')
  }
  return request
})

// 响应拦截器
http.interceptors.response.use((response) => {
  uni.hideLoading()
  if (response.data) {
    return response
  }
})

export default http
