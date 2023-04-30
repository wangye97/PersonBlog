import axios from "axios"

const request=axios.create({
    // baseURL:'http://120.26.8.174:8889/api',
    baseURL:'/api',
    timeout:3000
})

export default request
