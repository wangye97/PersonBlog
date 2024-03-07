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
}