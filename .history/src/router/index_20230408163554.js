import VueRouter from "vue-router";
import routes from './routes'
import Vue  from "vue";
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router= new VueRouter({
    routes
})

router.beforeEnter((to,from,next)=>{
  if(to.meta.isAuto){
      console.log(1);
      if(sessionStorage.getItem('isLogin')==1){
          next()
      }else{
          alert('请先登录')
      }
  }else{
      next()
  }
})


export default router