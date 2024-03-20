<<<<<<< HEAD
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
=======
import Cookies from "js-cookie";

const TokenKey='Person-Cookie'

export function getToken(){
    return Cookies.get(TokenKey)
}

export function setToken(token){
    return Cookies.set(TokenKey,token,{expires:1})
}

export function removeToken(){
    return Cookies.remove(TokenKey)
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
}