import Vue from 'vue'
import Vuex from 'vuex'
import * as dashboard from '~/store/dashboard'
import * as company from '~/store/company'

Vue.use(Vuex)

new Vuex.Store({
    modules: {
        dashboard,
        company
    }
})