import VueRouter from "vue-router";
import routes from './routes'
import Vue from "vue";
import { getToken } from "@/utils/auth";
Vue.use(VueRouter)
const whiteList = ['/login']// no redirect whitelist

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (getToken()) {
        if(to.path==='/login'){
            next({ path: '/' })
        }else{
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
            NProgress.done()
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