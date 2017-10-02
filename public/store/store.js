/* eslint-disable semi */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        someElem: undefined,
        reviews: [],
    },

    getters: {
        someElem(state) {
            return state.someElem;
        },

        reviews(state) {
            return state.reviews;
        }
    },

    mutations: {
        someElem(state, {type, value}) {
            state[type] = value;
        },

        reviews(state, {type, value}) {
            state[type] = value;
        }
    },

    actions: {
        elems({state, dispatch, commit}){
            const ValueOfSomeElem = null;

            commit('someElem', {type: 'someElem', value: ValueOfSomeElem});
        },

        reviews ({dispatch, commit}) {
            const value = [
                {
                    name: "Ashan Habadudi",
                    text: "Great works, skills and girls",
                    photo: "https://randomuser.me/api/portraits/men/50.jpg"
                },
                {
                    name: "Jason Statham",
                    text: "Great works, skills and girls",
                    photo: "https://www.thefamouspeople.com/profiles/images/jason-statham-3.jpg"
                },
                {
                    name: "Dwayne Johnson",
                    text: "Great works, skills and girls",
                    photo: "http://www4.pictures.zimbio.com/gi/Premiere+CBS+Films+Faster+Arrivals+osL6K6cJ8YWx.jpg"
                },
                {
                    name: "Ambibi Dubi",
                    text: "Great works, skills and projects",
                    photo: "https://randomuser.me/api/portraits/men/15.jpg"
                },
            ];

            commit('reviews', {type: 'reviews', value: value})
        },

        nextReview ({dispatch, commit}) {
            const value = [
                {
                    name: "Ambibi Dubi",
                    text: "Great works, skills and projects",
                    photo: "https://randomuser.me/api/portraits/men/15.jpg"
                },
            ];

            commit('reviews', {type: 'reviews', value: value})
        }

    },



});