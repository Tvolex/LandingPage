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
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Oleksiy Fomin1",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Oleksiy Fomin2",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Oleksiy Fomin3",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Oleksiy Fomin4",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
                },
                {
                    name: "Oleksiy Fomin5",
                    status: "FULL STACK mother fucker Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin. Some text about Oleksiy Fomin."
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