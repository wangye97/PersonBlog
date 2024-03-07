import { reqLogin} from "@/api"
import { setToken } from "@/utils/auth"
const actions = {
    async validateLogin({ commit }, data) {
        let result = await reqLogin(data)
        if (result.data.code == 200) {
            setToken(result.data.data.username)
            commit('VALIDATELOGIN', result.data.data)
            commit('LOADMENU', true)
        }
        return result.data
    },
    updateLoadMenus({commit}){
        commit('UPDATELOADMENUS',false)
    }
}
const mutations = {
    VALIDATELOGIN(state, data) {
        state.userInfo = data
    },
    LOADMENU(state, loadMenus){
        state.loadMenus = loadMenus
    },
    UPDATELOADMENUS(state,loadMenus){
        state.loadMenu=loadMenus
    }
}
const state = {
    userInfo: {},
    loadMenu:false
}

export default {
    actions,
    mutations,
    state
}