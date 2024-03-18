import { reqLogin} from "@/api"

const actions = {
    async validateLogin({ commit }, data) {
        let result = await reqLogin(data)
        console.log('1233211234567');
        if (result.data.code == 200) {
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