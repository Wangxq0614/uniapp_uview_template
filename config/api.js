const http = uni.$u.http

// post请求， config 自定义配置请求
export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

//get请求
export const getList = (data) => http.get('/getJoke', data)