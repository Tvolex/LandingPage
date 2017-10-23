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
            </v-layout>
        </v-container>

    </v-app>

</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

    .img {
        margin-top: -65px;
        height: 110vh;
        background-size: cover;
        background-position: center;

    }
    .home-text {
        text-align: center;
        position: absolute;
        bottom: 60%;
        height: 100px;
        width: 400px;
        font-family: 'effloresce';

        font-size: 250%;

    }
</style>
