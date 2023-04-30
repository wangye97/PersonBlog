import {reqHomeInfo} from '@/api'

const actions={
     async getHomeInfo({commit}){
        let result=await reqHomeInfo()
        if(result.status==200){
            commit('GETHOMGINFO',result.data)
        }
    }
}
const mutations={
    GETHOMGINFO(state,data){
        state.homeInfo=data
    }
}
const state={
    homeInfo:[],
    index:1
}
const getters={
    // homeList(state){
    //     return state.homeInfo[state.index]||[]
    // },
   
}

export default{
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}