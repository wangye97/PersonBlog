import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Article from '@/pages/Article'
import About from '@/pages/About'
import JsArticle from '@/pages/Article/js'
import PromiseArticle from '@/pages/Article/promise'
import AjaxArticle from '@/pages/Article/ajax'
import NodeArticle from '@/pages/Article/nodejs'
import VueArticle from '@/pages/Article/vue'
export const StaticRouter= [
    {
        path:'/login',
        component:()=>import('@/pages/Login'),
        meta:{head:false,title:'登录'},
        // beforeEnter(to,from,next){
        //     if(from.path=='/'){
        //         next()
        //     }
        //     if(sessionStorage.getItem('isLogin')==1){
        //         next(false)
        //     }else{
        //         next()
        //     }
        // }
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
        path:'/layout',
        component:()=>import('@/layout/index.vue'),
        // meta:{head:true,show:true,isAuto:true,title:'更多'}
    },
    {
        path:'/message',
        component:()=>import('@/pages/Message'),
        meta:{head:true,show:false,isAuto:true,title:'留言板'}
    },
    {
        path:'/register',
        component:()=>import('@/pages/Register'),
        meta:{head:false,title:'注册',isAuto:false},
        
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
        path:'/',
        redirect:'/index',
        component:Index,
<<<<<<< HEAD
=======
        //是否显示footer组件
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
        children:[
            {
                path:'index',
                component:Index,
                meta:{show:false,head:true,isAuto:true},
            }
        ]
<<<<<<< HEAD
       
=======
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
    },
   
    // * 应该是到404模块   path:'/'到首页
    // {
    //     path:'*',
    //     redirect:'/login'
    // }
]

export const dynamicRouter =[
    {
        path: '/404',
        component: (resolve) => require(['@/pages/features/404'], resolve),
        hidden: true
      },
    
    {
        path:'*',
        redirect:'/404'
    }
]
export const dynamicRouter=[
    {
        path:'/article',
        component:Article,
        redirect:'/article/css',
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
           
        ]
    },
]

