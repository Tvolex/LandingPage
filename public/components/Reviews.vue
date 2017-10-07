<template>
    <main>
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md10 offset-md2>
                        <transition :duration="{ enter: 500, leave: 800 }" name="fade">
                            <v-layout row wrap v-for="review in reviews" :key="review.name" v-if="showReview" transition="slide-x-transition">
                                <v-flex xs12 sm5>
                                    <v-card v-if="showReview">
                                        <v-card-media height="150px"
                                                      style="border-radius: 50%; width: 150px;"
                                                      class="avatar-image"
                                                      :src="review.photo">
                                        </v-card-media>
                                        <br>
                                        <v-card-title class="avatar-name">
                                            {{review.name}}
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm7 >
                                    <v-card >
                                        <br>
                                        <v-card-title class="review white--text">
                                            {{review.text}}
                                        </v-card-title>
                                        <v-btn v-on:click="nextReview">Next</v-btn>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </transition>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </main>
</template>

<script>

    export default {
        name: 'body-3',
        data() {
            return {
                items: [
                    {
                        src: 'imgs/3.jpg'
                    }
                ],
                item: 0,
                showReview: true,

            }
        },
        mounted () {
            this.$store.dispatch('reviews');
        },

        methods: {
            getRandomNub(min, max) {
                return Math.random() * (max - min)  + min;
            },

            setVisible() {
                this.showReview = !this.showReview;
            },

            nextReview() {
                this.showReview = !this.showReview ;
                this.item = this.item + 1;
                setTimeout(this.setVisible, 800);
            }
        },

        computed: {
            reviews() {
                const reviews = this.$store.getters.reviews;
                if (this.item > reviews.length - 1) this.item = 0;
                return reviews.slice(this.item, this.item + 1)
            },
        },

        watch: {
            reviews (oldVal, val) {

            }
        }
    }
</script>

<style scoped>
    #carousel-view .fade-enter-active,
    #carousel-view .fade-leave-active,
    #carousel-view .fade-leave-to {
        transition: 0.3s ease-out;
        position: absolute;
        top: 0;
        left: 0;
    }

    #carousel-view .fade-enter,
    #carousel-view .fade-leave,
    #carousel-view .fade-leave-to {
        opacity: 0;
    }
    .review {
        font-size: x-large;
        word-wrap: normal;
    }
    .card {
        box-shadow: none;
    }
    .avatar-name {
        font-size: large;
        color: white;
        width: 200px;
    }
    .application--light .card, .application .theme--light.card {
        background-color: transparent;
    }
    .reviews {
        padding-top: 10%;
    }
    .carousel-item{
        z-index: 2;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style>
