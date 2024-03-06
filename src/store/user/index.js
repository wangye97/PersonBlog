import { reqLogin} from "@/api"
import { setToken } from "@/utils/auth"
const actions = {
    async validateLogin({ commit }, data) {
        let result = await reqLogin(data)
        if (result.data.code == 200) {
            setToken(result.data.data.username)
            commit('VALIDATELOGIN', result.data.data)
        }
        return result.data
    },
}
const mutations = {
    VALIDATELOGIN(state, data) {
        state.userInfo = data
    }
}
const state = {
    userInfo: {}
}

export default {
    actions,
    mutations,
    state
}