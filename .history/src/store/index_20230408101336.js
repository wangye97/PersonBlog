import Vue from 'vue'
import Vuex from 'vuex'

import capital from './capital'
import home from './home'
import article from './article'
import user from './user'
import more from './more'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        capital,
        home,
        article,
        user,
        more
    },
    plugins: [createPersistedState()]
})