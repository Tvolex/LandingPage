<template>
    <main>
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md10 offset-md2>
                        <transition :duration="{ enter: 500, leave: 800 }" name="fade">
                            <swiper :options="swiperOption">
                                <swiper-slide v-for="item in reviews" :key="item.name">
                                    <v-layout row wrap>
                                        <v-flex xs12 sm5 offset-xs1>
                                            <v-avatar size="200"  class="grey lighten-4">
                                                <img :src="item.photo" width="150px" class="" alt="avatar">
                                            </v-avatar>
                                            <v-card-title class="avatar-name">
                                            {{item.name}}
                                            </v-card-title>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-card-title>
                                                {{item.text}}
                                            </v-card-title>
                                        </v-flex>
                                    </v-layout>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev"  slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
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
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30
                }
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
                return  this.$store.getters.reviews;
            },
        },

        watch: {
            reviews (oldVal, val) {

            }
        }
    }
</script>

<style scoped>
    .avatar .icon, .avatar img {
        width: 150px;
        height: 150px;
    }
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
