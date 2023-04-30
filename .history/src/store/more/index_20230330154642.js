import {reqGetMoreInfo} from '@/api'
const actions={
    async getMoreInfo({commit}){
        let result=await reqGetMoreInfo()
        console.log(result);
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