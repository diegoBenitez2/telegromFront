import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './library';
import './assets/icons';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => { return h(App); },
}).$mount('#app');
