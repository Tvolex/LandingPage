<template>
    <main>
        <v-parallax src="imgs/3.jpg" jumbotron>
            <v-container float>
                <v-layout row wrap class="reviews">
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md10 offset-md2>
                        <v-layout row wrap>
                            <v-flex xs12 sm5>
                                <v-card>
                                    <v-card-media height="150px"
                                                  style="border-radius: 50%; width: 150px;"
                                                  class="avatar-image"
                                                  src="https://randomuser.me/api/portraits/men/1.jpg">
                                    </v-card-media>
                                    <br>
                                    <v-card-title class="avatar-name">
                                        Якийсь чувак
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm7 >
                                <v-card>
                                    <br>
                                    <v-card-title class="review white--text">
                                        Тут я тіп оставив відгук, вобщем п!зд@та компашка пацани. Рекомендую!
                                    </v-card-title>
                                </v-card>
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
        name: 'body-3',
        data() {
            return {
                items: [
                    {
                        src: 'imgs/3.jpg'
                    }
                ]
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
</style>
