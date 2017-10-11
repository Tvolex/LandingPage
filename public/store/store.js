/* eslint-disable semi */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        someElem: undefined,
        reviews: [],
        teammates: [],
    },

    getters: {
        someElem(state) {
            return state.someElem;
        },

        reviews(state) {
            return state.reviews;
        },

        teammates(state) {
            return state.teammates;
        }
    },

    mutations: {
        someElem(state, {type, value}) {
            state[type] = value;
        },

        reviews(state, {type, value}) {
            state[type] = value;
        },

        teammates(state, {type, value}) {
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

        teammates ({dispatch, commit}) {
            const value = [
                {
                    name: "Oleksiy Fomin0",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. " +
                    "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Ivan Ferenchuk",
                    status: "MAGIC mother fucker HTML&CSS Developer",
                    photo: "./imgs/TeammatesPhotos/Ivan_Ferenchuk.jpg",
                    description: "Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk. " +
                    "Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk."
                },
                {
                    name: "Petro Shved",
                    status: "FULL STACK mother fucker Developer",
                    photo: "./imgs/TeammatesPhotos/Petro_Shved.jpg",
                    description: "Some text about Petro Shved. Some text about Petro Shved." +
                    " Some text about Petro Shved. Some text about Petro_Shved. Some text about Petro Shved."
                },
                {
                    name: "Vasya Tysyanchyn",
                    status: "NOT FULL STACK mother fucker Developer",
                    photo: "./imgs/TeammatesPhotos/Vasya_Tysyanchyn.jpg",
                    description: "Some text about Vasya Tysyanchyn. Some text about Vasya Tysyanchyn." +
                    " Some text about Vasya Tysyanchyn. Some text about Vasya Tysyanchyn. Some text about Vasya Tysyanchyn."
                },
                {
                    name: "Yaroslav Fedyshyn",
                    status: "FULL STACK mother fucker Developer",
                    photo: "./imgs/TeammatesPhotos/Yaroslav_Fedyshyn.jpg",
                    description: "Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn." +
                    " Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn."
                },
            ];

            commit('teammates', {type: 'teammates', value: value})
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