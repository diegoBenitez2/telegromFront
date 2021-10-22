import Vue from 'vue';
import Vuex from 'vuex';
import SearchMessage from './modules/SearchMessage';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        SearchMessage,
    },
});
