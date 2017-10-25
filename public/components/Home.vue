<template>
    <v-app id="Home">
        <img class="img"  src="imgs/1.jpg" alt="a">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 md4 offset-md6 >
                    <div class="home-text text-xs-left text-md-center" style="letter-spacing: 10px;">WEB DESIGN</div>
                    <br>
                    <div class="home-text text-xs-left text-md-center" style="font-size: 120%; bottom: 50%; letter-spacing: 5px">MADE WITH LOVE</div>
                </v-flex>
                <v-flex xs12  >
                    <router-link
                            tag="div"
                            v-for="item in items"
                            style="height: 100px; width: 100px;"
                            class="btn-down"
                            to="/"
                            key="arrowDown"
                            v-on:click.native="scroll(item.link)"
                    >
                        <v-icon class="arrow-down pulse-button">keyboard_arrow_down</v-icon>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>

    </v-app>

</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                items: [
                    {link: "#Works"},
                ],
            }
        },
        methods: {
            scroll(item) {
                this.$scrollTo(item, 500, {y: true});
            }
        },
    }
</script>

<style scoped>
    .pulse-button {
        -webkit-animation: pulse 1s infinite;
        z-index: 1;
    }
    @-webkit-keyframes pulse1{
        0%{
            -webkit-transform: scale(.2);
            opacity: .05;
        }
        25%{
            -webkit-transform: scale(.4);
            opacity: .3;
        }
        60%{
            -webkit-transform: scale(.8);opacity: .8;
        }
        70%{
            -webkit-transform: scale(1);opacity: .55;
        }
        80%{
            -webkit-transform: scale(1.1);opacity: .4;
        }
        100%{
            -webkit-transform: scale(1.2);opacity: .1;
        }
    }
    .btn-down {
        text-align: center;
        text-align: -webkit-center;
        width: 100px;
        height: 100px;
        bottom: 10%;
        margin-left: -50px;
        left: 50%;
        position: absolute;
        cursor: pointer;
    }
    .btn-down:after {
        z-index: 1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: -3px;
        left: 0px;
        opacity: 0;
        border: 3px solid rgba(255,255,255,0.1);
        -webkit-animation: pulse1 1s linear infinite;
        -moz-animation: pulse1 1s linear infinite;
        animation: pulse1 1s linear infinite;
        -webkit-border-radius: 999px;
        -moz-border-radius: 999px;
        border-radius: 999px;
        -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0,0,0,.54);
        -moz-box-shadow: inset 0px 0px 15px 10px rgba(0,0,0,.54);
        box-shadow: inset 0px 0px 15px 10px rgba(0,0,0,.54);

    }
    .arrow-down {
        z-index: 1;
        font-size: 50px;
        margin-top: 25px;
    }
    .img {
        margin-top: -65px;
        height: 110vh;
        width: 100vw;
        background-size: cover;
        background-position: center;
    }
    .home-text {
        text-align: center;
        position: absolute;
        bottom: 60%;
        height: 100px;
        width: 300px;
        font-family: 'effloresce';

        font-size: 250%;

    }
</style>
