//require modules
import "babel-core/register"
import "babel-polyfill"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { store } from './store/store'

// require components
import Index from '../public/components/App.vue'
import Index2 from '../public/components/App2.vue'

const routes = [
    { path: '/', component: Index, name: "Index"},
    { path: '/asd', component: Index2, name: "Index2"}
];


//Setup Vue
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// Register components
new Vue({
    el: '#app',
    router: router,
    store: store,
    //render: h => h(Index)
});

