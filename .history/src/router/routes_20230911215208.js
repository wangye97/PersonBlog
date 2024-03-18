import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Article from '@/pages/Article'
import About from '@/pages/About'
import JsArticle from '@/pages/Article/js'
import PromiseArticle from '@/pages/Article/promise'
import AjaxArticle from '@/pages/Article/ajax'
import NodeArticle from '@/pages/Article/nodejs'
import VueArticle from '@/pages/Article/vue'
import AllArticle from '@/pages/Article/All'
export default [
    {
        path:'/login',
        component:()=>import('@/pages/Login'),
        meta:{head:false,title:'登录'},
        beforeEnter(to,from,next){
            if(from.path=='/'){
                next()
            }
            if(sessionStorage.getItem('isLogin')==1){
                next(false)
            }else{
                next()
            }
            
        }
    },
    {
        path:'/about',
        component:About,
        meta:{head:true,show:false,isAuto:true,title:'关于'}
    },
    {
        path:'/more',
        component:()=>import('@/pages/More'),
        meta:{head:true,show:true,isAuto:true,title:'更多'}
    },
    {
        path:'/register',
        component:()=>import('@/pages/Register'),
        meta:{head:false,title:'注册',isAuto:false},
        beforeEnter: (to, from, next) => {
            if(from.path=='/login'||from.path=='/'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/reset',
        component:()=>import('@/pages/Reset'),
        meta:{head:false,isAuto:true,title:'重置'}
    },
    {
        path:'/home',
        component:Home,
        //是否显示footer组件
        meta:{show:true,head:true,isAuto:true,title:'主页'}
    },
    {
        path:'/index',
        component:Index,
        //是否显示footer组件
        meta:{show:false,head:true,isAuto:true},
       
    },
    {
        path:'/article',
        component:Article,
        meta:{show:true,head:true,isAuto:true},
        children:[
            {
                path:'css',
                // component:CssArticle,
                //路由懒加载
                component:()=>import('@/pages/Article/css'),
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'js',
                component:JsArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'promise',
                component:PromiseArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'ajax',
                component:AjaxArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'node',
                component:NodeArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'vue',
                component:VueArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
            {
                meta:{show:true},
                path:'all',
                component:AllArticle,
                meta:{show:true,head:true,isAuto:true,title:'知识库'},
            },
           
        ]
    },
    {
        path:'*',
        redirect:'/login'
    }
]

