import {reqGetCssInfo,reqGetJsInfo,reqGetPromiseInfo,reqGetAjaxInfo,reqGetNodeInfo,reqGetVueInfo} from '@/api'
const actions={
    async getCssInfo({commit}){
        let result=await reqGetCssInfo()
        if(result.status==200){
            commit('GETCSSINFO',result.data)
        }
    },
    async getJsInfo({commit}){
        let result=await reqGetJsInfo()
        if(result.status==200){
            commit('GETJSINFO',result.data)
        }
    },
    async getPromiseInfo({commit}){
        let result=await reqGetPromiseInfo()
        if(result.status==200){
            commit('GETPROMISEINFO',result.data)
        }
    },
    async getAjaxInfo({commit}){
        let result=await reqGetAjaxInfo()
        if(result.status==200){
            commit('GETAJAXINFO',result.data)
        }
    },
    async getNodeInfo({commit}){
        let result=await reqGetNodeInfo()
        if(result.status==200){
            commit('GETNODEINFO',result.data)
        }
    },
    async getVueInfo({commit}){
        let result=await reqGetVueInfo()
        if(result.status==200){
            commit('GETVUEINFO',result.data)
        }
    }
}
const mutations={
    GETCSSINFO(state,data){
        state.cssInfo=data
    },
    GETJSINFO(state,data){
        state.jsInfo=data
    },
    GETPROMISEINFO(state,data){
        state.promiseInfo=data
    },
    GETAJAXINFO(state,data){
        state.ajaxInfo=data
    },
    GETNODEINFO(state,data){
        state.nodeInfo=data
    },
    GETVUEINFO(state,data){
        state.vueInfo=data
    }
}
const state={
    cssInfo:'',
    jsInfo:'',
    promiseInfo:'',
    ajaxInfo:'',
    nodeInfo:'',
    vueInfo:'',
}



export default{
    actions,
    mutations,
    state
}