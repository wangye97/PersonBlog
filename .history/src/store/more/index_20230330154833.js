import {reqGetMoreInfo} from '@/api'
const actions={
    async getMoreInfo({commit}){
        let result=await reqGetMoreInfo()
        if(result.status==200){
            commit('GETMOREINFO',result.data)
        }
    }
}
const mutations={
    GETMOREINFO(state,data){
        state.getMoreInfo=data
    }
}
const state={
    getMoreInfo:[]
}

export default{
    actions,
    mutations,
    state
}