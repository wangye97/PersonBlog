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

}
const state={

}

export default{
    actions,
    mutations,
    state
}