<template>
    <v-parallax src="imgs/img5.jpg">
            <v-container float>
                <v-layout row wrap>
                    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 style="margin-top: 64px">
                        <div style="font-size: 50px; font-family: 'Didot', sans-serif" align="center">Want to work with us?</div>
                    </v-flex>
                    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                        <div style="font-size: 30px; font-family: 'Times New Roman', sans-serif; " align="center">contactus@apt.com</div>
                        <hr style="width: 15%; margin-left: 42.5%;">
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="contactUsInfo">
                    <v-flex xs12 sm4 >
                        <div style="font-size: 20px; font-family: 'Didot', sans-serif" align="left">ATP</div>
                        <img src="../imgs/trik.png">
                        <br><br>
                        <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="left">The last Wordpress theme</div>
                        <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="left"> you will ever need</div>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <div style="font-size: 20px; font-family: 'Didot', sans-serif" align="center">SOCIAL MEDIA</div>
                        <img style="margin-left: calc(50% - 25px)" src="../imgs/trik.png">
                        <br><br>
                        <div align="center">
                            <img style="margin-left: 0px; cursor: pointer" src="../imgs/fab.png"/>
                            <img style="margin-left:  40px; cursor: pointer" src="../imgs/twit.png"/>
                            <img style="margin-left: 30px; cursor: pointer" src="../imgs/skp.png"/>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm4 >
                        <div style="font-size: 20px; font-family: 'Didot', sans-serif" align="right">ADRESS</div>
                        <img align="right" src="../imgs/trik.png">
                        <br><br>
                        <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="right">795 Folsom Ave, Suite 600</div>
                        <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="right">San Francisco, CA94107</div>
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
    .contactUsInfo {
        margin-top: 80px;
        margin-left: 20%;
        width: 60%;
        /*background-color: wheat;*/
    }
    hr {
        border: none;
        color: #1c9c83;
        background-color: #1c9c83;
        height: 2px;
    }

</style>
