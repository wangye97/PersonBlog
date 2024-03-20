<<<<<<< HEAD
//与导航守卫相关
import {StaticRouter} from '@/router/routes'
const actions={
    GenerateRoutes({commit},data){
        commit('GENERATEROUTES',data)
    }
}
const mutations={
    GENERATEROUTES(state,data){
        state.router=state.router.concat(data)
    }
}
const state={
    router:StaticRouter
}
export default{
actions,
mutations,
state
=======
import {StaticRouter} from '@/router/routes'



const actions={
    GenerateRoutes({commit},asyncRoute){
        commit('GENERATEROUTES',asyncRoute)
    }
}

const mutations={
    GENERATEROUTES(state,routers){
        state.routers=StaticRouter.concat(routers)
    }
}

const state={
    routers:StaticRouter
}


export default {
    actions, 
    mutations,
    state
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
}