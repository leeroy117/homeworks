import Vue from 'vue';
import Vuex from 'vuex';

import currentUser from './modules/currentUser'
import categoria from './modules/categoria'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
       currentUser,
       categoria
    }
})

