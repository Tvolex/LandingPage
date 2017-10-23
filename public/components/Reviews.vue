<template>
    <main id="Reviews">
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md10 offset-md2>
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="item in reviews" :key="item.name" data-swiper-autoplay="3000">
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
                        </swiper>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </main>
</template>
<script>
    export default {
        name: 'Reviews',
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
                    spaceBetween: 30,
                    autoplay: true,
                    speed: 1000,
                    iOSEdgeSwipeDetection: true,
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

<style >
    .avatar .icon, .avatar img {
        width: 150px;
        height: 150px;
    }

    .review {
        font-size: x-large;
        word-wrap: normal;
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

    .swiper-pagination-bullet {
        background-color: white;
    }
</style>
