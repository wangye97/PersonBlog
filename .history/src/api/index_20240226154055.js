import {request} from '@/api/request'
// import {requests} from '@/api/request'
import axios from 'axios'
import qs from 'qs'
export const reqRandom=()=>axios({url:'https://v1.hitokoto.cn/',method:'get'})
// export const reqLogin=(data)=>{
//     return request({url:'/login',method:'post',data:qs.stringify(data)})
// }

//得到主页的信息
export const reqHomeInfo=()=>request({url:'/home',method:'get'})

//得到css文章信息
export const reqGetCssInfo=()=>request({url:'/getcss',method:'get'})
//得到js文章信息
export const reqGetJsInfo=()=>request({url:'/getjs',method:'get'})
//得到promise文章信息
export const reqGetPromiseInfo=()=>request({url:'/getpromise',method:'get'})
//得到ajax文章信息
export const reqGetAjaxInfo=()=>request({url:'/getajax',method:'get'})
//得到nodejs文章信息
export const reqGetNodeInfo=()=>request({url:'/getnode',method:'get'})
//得到vue文章信息
export const reqGetVueInfo=()=>request({url:'/getvue',method:'get'})
//获取message信息
export const reqGetMessageInfo=(props)=>request({url:`/getcomment/${props}`,method:'get'})
//修改点赞状态和数量
export const reqUpdateLikeState=(data)=>request({url:'updatecomment',method:'post',data:qs.stringify(data)})
//提交评论
export const reqSubmitComment=(data)=>request({url:'/submitComment',method:'post',data:qs.stringify(data)})
//登录功能
export const reqLogin=(data)=>request({url:'/api/login',method:'post',data:qs.stringify(data)})
//注册功能
export const reqRegister=(data)=>request({url:'/register',method:'post',data:qs.stringify(data)})
//退出功能
export const reqLogout=(id)=>request({url:`/logout/${id}`,method:'post'})
//重置密码
export const reqResetPassword=(data)=>request({url:`/reset`,method:'post',data:qs.stringify(data)})
//得到更多模块的所有信息
export const reqGetMoreInfo=()=>request({url:'/more',method:'get'})
//得到更多组件中的图片
export const reqGetMoreImg=()=>request({url:'/more/img',method:'get'})




//测试
// setTimeout(()=>{
//     console.log(123);
//     requests({url:`/text?id=12&title=456`,method:'get'})
// },1000)