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

router.beforeEach((to,from,next)=>{
  if(to.meta.isAuto){
      if(sessionStorage.getItem('isLogin')==1){
          next()
      }else{
          alert('请先登录')
      }
  }else{
      next()
  }
})

router.afterEach((to,from)=>{
    console.log(to);
    document.title='Person_blog  '+to.meta.title
})


export default router