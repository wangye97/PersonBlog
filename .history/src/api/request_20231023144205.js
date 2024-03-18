import axios from "axios"
import nProgress from "nprogress"
import 'nprogress/nprogress.css'
const request=axios.create({
    baseURL:'http://139.9.197.170:8889/api',
    // baseURL:'/api',
    timeout:3000
})

// const requests=axios.create({
//     baseURL:'http://127.0.0.1:8889/api'
// })

//请求拦截器
request.interceptors.request.use((config)=>{
    //开始进度条
    nProgress.start()
    
    //配置对象，里面有请求头信息
    return config
    console.log(config);
})

//响应拦截器
request.interceptors.response.use(
    (res)=>{
        //进度条结束
        nProgress.done()
        console.log(res);
        return res.data
    },
    (err)=>{
        return Promise.reject(new Error('失败'))
    })

export {
    request,
    // requests
} 
 
