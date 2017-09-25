<template>
    <main>
        <v-carousel icon="lens" id="carousel-view">
            <v-carousel-item
                    v-for="(item,i) in items"
                    v-bind:key="i"
                    v-bind:src="item.src"
                    transition="fade"
                    class="carousel-item"
                    reverseTransition="fade">
                <div class="reviews">
                    <div class="avatar">
                        <v-card>
                            <v-card-media height="150px" class="avatar-image" src="https://randomuser.me/api/portraits/men/1.jpg">
                            </v-card-media>
                            <br>
                            <v-card-title class="avatar-name">
                                Якийсь чувак
                            </v-card-title>
                        </v-card>
                    </div>
                    <div class="review"></div>
                </div>

            </v-carousel-item>
        </v-carousel>
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
    .card {
        box-shadow: none;
    }
    .avatar-name {
        font-size: large;
        color: white;
    }

    .avatar-image {
        height: 150px;
        width: 150px;
        border-radius: 75px;

    }
    .application--light .card, .application .theme--light.card {
        background-color: transparent;
    }
    .avatar, .reviews {
        z-index: 5;
    }
    .carousel-item{
        z-index: 2;
    }
</style>
