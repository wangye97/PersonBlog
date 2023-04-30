import {reqGetMoreInfo,reqGetMoreImg} from '@/api'
const actions={
    async getMoreInfo({commit}){
        let result=await reqGetMoreInfo()
        if(result.status==200){
            commit('GETMOREINFO',result.data)
        }
    },
    async getMoreImg({commit}){
        let result =await reqGetMoreImg()
        if(result.status==200){
            commit('GETMOREIMG',result.data)
        }
    }
}
const mutations={
    GETMOREINFO(state,data){
        state.getMoreInfo=data
    },
    GETMOREIMG(state,data){
        state.getMoreImg=data
    }
}
const state={
    getMoreInfo:[],
    getMoreImg:[]
}

export default{
    actions,
    mutations,
    state
}