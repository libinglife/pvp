import axios from 'axios'

import Vue from "vue"
const http = axios.create({
    baseURL: 'http://localhost:3002/admin/api/'
})

// 请求拦截器
http.interceptors.request.use((config) => {
    // 请求之前做点什么
    // console.log(config);
    // 加上验证token
    if (localStorage.token) {
        config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
http.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, err => {
    console.log(err.response);
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: "error",
            message: err.response.data.message
        })
    }

    return Promise.reject(err);
})
export default http