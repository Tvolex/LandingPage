import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        someElem: null,
    },

    getters: {
        someElem(state) {
            return state.someElem;
        },
    },

    mutations: {
        someElem(state, {type, value}) {
            state[type] = value;
        },

    },

    actions: {
        async items( {dispatch, commit}){
            const ValueOfSomeElem = null;

            commit('someElem', {type: 'someElem', value: ValueOfSomeElem});

        },

    },



});