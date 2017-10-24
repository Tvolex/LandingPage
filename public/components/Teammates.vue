<template>
    <main id="Team">
        <v-parallax src="imgs/4.jpg" height="700">
            <v-container float>
                <v-layout row wrap class="team">
                    <v-flex xs12 class="text-xs-center">
                        <v-layout>
                            <v-flex style="font-size: x-large"  xs12 class="text-xs-center">
                                MEET OUR TEAM
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12 md10 offset-md1 class="text-xs-center" style="filter: brightness(100%); z-index:5">
                                One of the best teams if not better in Ukraine. Very well-developed specialists who make all goals in an incredibly short time
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 class="text-xs-center teammatesAvatarsLine">
                        <v-layout row no-wrap>
                            <!--<v-flex xs1>-->
                                <!--<v-icon>keyboard_arrow_left</v-icon>-->
                            <!--</v-flex>-->
                            <swiper :options="swiperOption" class="swiper-container" ref="swiper">
                                <swiper-slide  v-for="teammate in teammates" data-swiper-autoplay="5000"  :key="teammate.name">
                                    <v-avatar size="150" class="grey lighten-4"
                                            style="cursor: pointer; margin:10px"
                                            v-on:click="selectTeammate(teammate)">
                                        <img :src="teammate.photo" alt="avatar">
                                    </v-avatar>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                            <!--<v-flex xs1>-->
                                <!--<v-icon>keyboard_arrow_right</v-icon>-->
                            <!--</v-flex>-->
                        </v-layout>
                    </v-flex>
                    <v-flex xs12>
                        <v-layout row>
                            <v-flex xs12 md8 offset-md2>
                                <v-layout row wrap>
                                    <v-flex xs12 md4 hidden-xs-only>
                                        <v-avatar
                                                size="200"
                                                class="grey lighten-4 currentTeammateAvatar"
                                        >
                                            <img :src="currentTeammate.photo" alt="avatar">
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <div style="font-size: 23px">{{currentTeammate.name}}</div><br>
                                        <div style="font-size: 18px">{{currentTeammate.status}}</div><br>
                                        <v-layout row wrap>
                                            <v-flex xs12 style="font-size: 15px">
                                                {{currentTeammate.description}}
                                            </v-flex>
                                        </v-layout>

                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-parallax>
    </main>

</template>

<script>
    export default {
        name: 'Team',
        data() {
            return {
                currentTeammate: null,
                swiperOption: {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 50,
                    grabCursor: true,
                    speed: 300,
                    delay: 5000,
                    autoplay: true,
                },
            }
        },

        beforeCreate() {
            const teammates = this.$store.dispatch('teammates');
        },

        created() {
            this.currentTeammate = this.$store.getters.teammates[0];
            this.swiperOption.autoplay = this.$store.getters.mobile;
        },
        mounted() {
            if (this.mobile) {
                var myFuckingSwiper = this.$refs.swiper.swiper;
                var st = this.selectTeammate;

                myFuckingSwiper.on('transitionStart', function () {
                    st(myFuckingSwiper.realIndex)
                });
            }

        },

        computed: {
            teammates() {
                return this.$store.getters.teammates;
            },

            mobile() {
                return this.$store.getters.mobile;
            }
        },

        methods: {
            selectTeammate(teammate) {
                Number.isInteger(teammate) ?
                    this.currentTeammate = this.teammates[teammate] :
                    this.currentTeammate = teammate;
            },
        },
    }
</script>

<style scoped>
    .swiper-button-prev {
        background-image: url("../imgs/navigate_before.png");
    }
    .swiper-button-next {
        background-image: url("../imgs/navigate_next.png");
    }
    .swiper-pagination {
        margin-top: 5%;
    }
    .swiper-slide {
        width: 250px;
    }
    .currentTeammateAvatar {
        width: minmax(100px, 200px);
    }
    .teammatesAvatarsLine {
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .img {
        margin-top: 0;
        width: 100%;
        height: 100%;
    }
    .avatar .icon, .avatar img {
        border-radius: 50%;
        height: 150px;
        width: 150px;
    }
</style>
