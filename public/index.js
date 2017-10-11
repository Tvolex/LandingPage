/* eslint-disable semi */
//require modules
require('swiper/dist/css/swiper.css')

import "babel-core/register"
import "babel-polyfill"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VuewAwesomeSwiper from 'vue-awesome-swiper'
import { store } from './store/store'

// require components
import Index from '../public/components/App.vue'
import Index2 from '../public/components/App2.vue'

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash

            // specify offset of the element
            if (to.hash === '#anchor2') {
                position.offset = { y: 100 }
            }
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

const routes = [
    { path: '/', component: Index, name: "Index"},
    { path: '/asd', component: Index2, name: "Index2"}
];


//Setup Vue
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VuewAwesomeSwiper);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior,
});

// Register components
new Vue({
    el: '#app',
    router: router,
    store: store,
    //render: h => h(Index)
});

