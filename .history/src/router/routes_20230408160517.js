import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Article from '@/pages/Article'
import About from '@/pages/About'
import CssArticle from '@/pages/Article/css'
import JsArticle from '@/pages/Article/js'
import PromiseArticle from '@/pages/Article/promise'
import AjaxArticle from '@/pages/Article/ajax'
import NodeArticle from '@/pages/Article/nodejs'
import VueArticle from '@/pages/Article/vue'
export default [
    {
        path:'/login',
        component:()=>import('@/pages/Login'),
        meta:{head:false}
    },
    {
        path:'/about',
        component:About,
        meta:{head:true,show:false}
    },
    {
        path:'/more',
        component:()=>import('@/pages/More'),
        meta:{head:true,show:true}
    },
    {
        path:'/register',
        component:()=>import('@/pages/Register'),
        meta:{head:false},
        beforeEnter: (to, from, next) => {
            if(from.path=='/login'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/reset',
        component:()=>import('@/pages/Reset'),
        meta:{head:false}
    },
    {
        path:'/home',
        component:Home,
        //是否显示footer组件
        meta:{show:true,head:true}
    },
    {
        path:'/index',
        component:Index,
        //是否显示footer组件
        meta:{show:false,head:true},
        beforeEnter(to,from,next){
            console.log(from);
        }
    },
    {
        path:'/article',
        component:Article,
        meta:{show:true,head:true},
        children:[
            {
                path:'css',
                // component:CssArticle,
                //路由懒加载
                component:()=>import('@/pages/Article/css'),
                meta:{show:true,head:true},
            },
            {
                meta:{show:true},
                path:'js',
                component:JsArticle,
                meta:{show:true,head:true},
            },
            {
                meta:{show:true},
                path:'promise',
                component:PromiseArticle,
                meta:{show:true,head:true},
            },
            {
                meta:{show:true},
                path:'ajax',
                component:AjaxArticle,
                meta:{show:true,head:true},
            },
            {
                meta:{show:true},
                path:'node',
                component:NodeArticle,
                meta:{show:true,head:true},
            },
            {
                meta:{show:true},
                path:'vue',
                component:VueArticle,
                meta:{show:true,head:true},
            },
           
        ]
    },
    {
        path:'*',
        redirect:'/login'
    }
]

