import {reqRandom} from '@/api'

const actions={
    async getRandom({commit}){
        let result=await reqRandom()
        if(result.data.length>20){
            return result.data.length
        }
        if(result.status==200){
            commit('GETRANDOM',result.data)
        }
    }
}
const mutations={
    GETRANDOM(state,data){
        state.getRandom=data
    }
}
const state={
    getRandom:{}
}
const getters={}
export default {
    actions,
    mutations,
    state,
    getters
}