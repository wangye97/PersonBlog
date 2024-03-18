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
}