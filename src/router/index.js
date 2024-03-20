import VueRouter from "vue-router";
<<<<<<< HEAD
import { dynamicRouter, StaticRouter } from './routes'
import Vue from "vue";
import NProgress from 'nprogress' // progress bar
import { getToken } from "@/utils/auth";
import store from '../store'
NProgress.configure({ showSpinner: false })// NProgress Configuration

Vue.use(VueRouter)
const whiteList = ['/login']// no redirect whitelist
let flag = true

=======
import {StaticRouter,dynamicRouter} from './routes'
import store from '@/store'
import Vue from "vue";
import { getToken } from "@/utils/auth";
Vue.use(VueRouter)
const whiteList = ['/login']// no redirect whitelist
let flag=true
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
<<<<<<< HEAD

const router = new VueRouter({
    routes: StaticRouter
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    // 实现自动登录
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            if (flag) {
                flag = false
                store.dispatch('GenerateRoutes', dynamicRouter).then((res) => {
                    router.addRoutes(dynamicRouter)
                    next({ ...to, replace: true })
                }).catch((e) => {
                    console.warn(e.message)
                })
            }
            next()
            NProgress.done()
        }
    } else if(to.path=='/register'){
        next()
        NProgress.done()

    }
    else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
            NProgress.done()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
            NProgress.done()
=======
const router = new VueRouter({
    routes:StaticRouter      
})


router.beforeEach((to, from, next) => {
    if (getToken()) {
        if(to.path==='/login'){
            next({ path: '/' })
        }else{  
                if(flag){
                    flag=false
                        store.dispatch('GenerateRoutes',dynamicRouter).then(()=>{
                            router.addRoutes(dynamicRouter)
                            next({ ...to, replace: true })
                        }).catch((e)=>{
                            console.log(e);
                        })
                }
                next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
            // NProgress.done()
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
        }
    }
})

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = 'Person_blog   ---' + to.meta.title
    } else {
        document.title = 'Person_blog'
    }
})


export default router