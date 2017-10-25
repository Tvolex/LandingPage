/* eslint-disable semi */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        someElem: undefined,
        reviews: [],
        teammates: [],
        mobile: false,
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
        },

        mobile(state) {
            return state.mobile;
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
        },

        mobile(state, {type, value}) {
            state[type] = value;
        }
    },

    actions: {
        mobile({dispatch, commit}) {
            let mobile = document.body.clientWidth < 600;

            commit('mobile', {type: 'mobile', value: mobile});
        },

        elems({state, dispatch, commit}){
            const ValueOfSomeElem = null;

            commit('someElem', {type: 'someElem', value: ValueOfSomeElem});
        },

        reviews ({dispatch, commit}) {
            const value = [
                {
                    name: "Ashan Habadudi",
                    text: "Great works, skills and girls",
                    photo: "https://randomuser.me/api/portraits/men/11.jpg"
                },
                {
                    name: "Jason Swilth",
                    text: "Great works, skills and girls",
                    photo: "https://randomuser.me/api/portraits/men/45.jpg"
                },
                {
                    name: "Dwayne Garbage",
                    text: "Great works, skills and girls",
                    photo: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                {
                    name: "Ambibi Dubi",
                    text: "Great works, skills and projects",
                    photo: "https://randomuser.me/api/portraits/men/78.jpg"
                },
            ];

            commit('reviews', {type: 'reviews', value: value})
        },

        teammates ({dispatch, commit}) {
            const value = [
                {
                    name: "Oleksiy Fomin",
                    status: "FULL STACK Developer",
                    photo: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11825179_1666774553541957_1366991187666773884_n.jpg?oh=0501a79951b88a59cdcad4017e0c418f&oe=5A7B2A0F",
                    description: "Oleksiy Fomin is one of the co-founders and good friend who will always consult and help without any problems. " +
                    "The main manager of the company who manages all projects. Features: knowledge of Java, PHP, Node.js and Ruby"
                },
                {
                    name: "Ivan Ferenchuk",
                    status: "MAGIC HTML&CSS Developer",
                    photo: "./imgs/TeammatesPhotos/Ivan_Ferenchuk.jpg",
                    description: "Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk. " +
                    "Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk. Some text about Ivan Ferenchuk."
                },
                {
                    name: "Petro Shved",
                    status: "FULL STACK Developer",
                    photo: "./imgs/TeammatesPhotos/Petro_Shved.jpg",
                    description: "Peter Shved is a good programmer and positive person who works well with other staff. Features: Java, Node.js and PHP"
                },
                {
                    name: "Vasya Tysyanchyn",
                    status: "NOT FULL STACK Developer",
                    photo: "./imgs/TeammatesPhotos/Vasya_Tysyanchyn.jpg",
                    description: "Having graduated alongside Chris Harvard, Vasili met with him to move from the bottom of the company. " +
                    "Bacause of his hard work in them it went very well and the company rose only a year and found an investor in Dubai, " +
                    "thanks to Vasily and his friend. Ideally knows with Java and Practicing Node.js. In his free time engaged in professional motocross."
                },
                {
                    name: "Yaroslav Fedyshyn",
                    status: "FULL STACK Developer",
                    photo: "./imgs/TeammatesPhotos/Yaroslav_Fedyshyn.jpg",
                    description: "Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn." +
                    " Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn. Some text about Yaroslav Fedyshyn."
                },
                {
                    name: "Kristopher Shultz",
                    status: "PR Manager",
                    photo: "https://instagram.fiev2-1.fna.fbcdn.net/t51.2885-15/e35/22280058_1667560616622618_1183093357803470848_n.jpg",
                    description: "After graduating Oxford went with friend Vasily to make a company where the one who wrote on the Python." +
                    " Perfectly knows with C++ and Java. Helps in promoting the company."
                }
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