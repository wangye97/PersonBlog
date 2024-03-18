import Cookies from "js-cookie"
import Config from '@/setting'
const fixedCookie='Person-Blog-Cookie'

export function getToken(){
    return Cookies.get(fixedCookie)
}

export function setToken(token){
    return Cookies.set(fixedCookie,token,{expires:Config.tokenCookieExpires})
}

export function removeToken(){
    return Cookies.remove(fixedCookie)
}