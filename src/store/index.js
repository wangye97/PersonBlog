import Vue, { isProxy } from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import getters from './getters'

=======
import getters  from './getters'
>>>>>>> d864875619b2ecca46d06f6fbf101fd7042c9708
import capital from './capital'
import home from './home'
import article from './article'
import user from './user'
import more from './more'
import permission from './permission'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        capital,
        home,
        article,
        user,
        more,
        permission
    },
    getters,
    plugins: [createPersistedState()]
})