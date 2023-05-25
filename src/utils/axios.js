import axios from 'axios'

const instance = axios.create({
    // 请求的根路径
    baseURL: 'http://127.0.0.1:3900/api',
    headers: { "Content-Type": "application/json" },
    timeout: '5000',

})
// axios请求拦截器
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    })
// axios响应拦截器
instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    console.log("页面不存在")
                    break
                case 500:
                    console.log("程序出错")
                    break
                default:
                    console.log(error.message)
            }
        }
        return Promise.reject(error)
    })

export default instance