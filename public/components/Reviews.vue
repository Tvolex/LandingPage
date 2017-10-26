<template>
    <main id="Reviews">
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm8 offset-sm2 md6 offset-md3>
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="item in reviews" :key="item.name" data-swiper-autoplay="3000">
                                <v-layout row wrap>
                                    <v-flex xs12 sm5 class="text-xs-center text-md-left">
                                        <v-avatar size="200"  class="grey lighten-4">
                                            <img :src="item.photo" width="150px" class="" alt="avatar">
                                        </v-avatar>
                                        <v-card-title class="avatar-name">
                                            {{item.name}}
                                        </v-card-title>
                                    </v-flex>
                                    <v-flex xs12 sm6 class="text-xs-right text-md-left">
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
                    speed: 1000,
                    autoplay: true,
                    spaceBetween: 30,
                    paginationClickable: true,
                    iOSEdgeSwipeDetection: true,
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                }
            }
        },
        mounted () {
            this.$store.dispatch('reviews');
        },

        computed: {
            reviews() {
                return  this.$store.getters.reviews;
            },
        },
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
    }
    .application--light .card, .application .theme--light.card {
        background-color: transparent;
    }
    .reviews {
        padding-top: 10%;
    }
    .swiper-pagination {
        position: relative;
    }
    .swiper-pagination-bullet {
        background-color: white;
    }
</style>
