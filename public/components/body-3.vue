<template>
    <main>
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md10 offset-md2>
                        <transition transition="slide-x-transition">
                            <v-layout row wrap v-for="review in reviews" :key="review.name">
                                <v-flex xs12 sm5>
                                    <v-card >
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
                                    <v-card>
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

            }
        },
        mounted () {
            this.$store.dispatch('reviews');
        },

        methods: {
            getRandomNub(min, max) {
                return Math.random() * (max - min)  + min;
            },

            nextReview() {
                this.item = this.item + 1;
            }
        },

        computed: {
            reviews() {
                const reviews = this.$store.getters.reviews;

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
    .fade-transition-leave-active {
        position: absolute;
    }

    .fade-transition-enter-active,
    .fade-transition-leave,
    .fade-transition-leave-to {
        transition: primary-transition;
    }

    .fade-transition-enter,
    .fade-transition-leave-to {
        opacity: 0;
    }
</style>
