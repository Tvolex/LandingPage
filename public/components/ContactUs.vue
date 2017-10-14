<template>
    <v-parallax src="imgs/5.jpg">
        <v-container float>
            <v-layout row wrap>
                <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                    <div style="font-size: 50px" align="center">Want to work with us?</div>
                </v-flex>
                <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                    <div style="font-size: xx-large" align="center">contactus@apt.com</div>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="contactUsInfo">
                <v-flex xs12 sm3 offset-sm1>
                    <div style="font-size: xx-large" align="center">ATP</div>
                    <br>
                    <div style="font-size: larger" align="center">The last Wordpress theme you will ever need</div>
                </v-flex>
                <v-flex xs12 sm3 offset-sm1>
                    <div style="font-size: xx-large" align="center">SOCIAL MEDIA</div>
                    <br>
                    <div style="font-size: larger" align="center">FB, TW, SK</div>
                </v-flex>
                <v-flex xs12 sm3 offset-sm1>
                    <div style="font-size: xx-large" align="center">ADRESS</div>
                    <br>
                    <div style="font-size: larger" align="center">795 Folsom Ave, Suite 600</div>
                    <div style="font-size: larger" align="center">San Francisco, CA94107</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-parallax>
</template>

<script>
    export default {
        name: 'body-5',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .contactUsInfo {
        margin-top: 15vh;
    }
    .parallax__image {
        filter: brightness(40%);
    }

</style>
