<template>
    <v-parallax src="imgs/img5.jpg" id="Contact">
            <v-container float>
                <v-layout row wrap>
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md6 offset-md3 style="margin-top: 5vh">
                        <div style="font-size: 200%; font-family: 'Didot', sans-serif" align="center">Want to work with us?</div>
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
                        <div class="retreat">
                            <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="left">The last Wordpress theme</div>
                            <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" align="left"> you will ever need</div>
                        </div>
                        <br>
                    </v-flex>
                    <v-flex xs12 sm4 >
                        <div style="font-size: 20px; font-family: 'Didot', sans-serif" :align="SM">SOCIAL MEDIA</div>
                        <div :align="SM">
                            <img  src="../imgs/trik.png" >
                        </div>
                        <div class="retreat" :align="SM">
                            <img style="margin-left: 0px; cursor: pointer" src="../imgs/fab.png"/>
                            <img style="margin-left:  40px; cursor: pointer" src="../imgs/twit.png"/>
                            <img style="margin-left: 30px; cursor: pointer" src="../imgs/skp.png"/>
                        </div>
                        <br>
                    </v-flex>
                    <v-flex xs12 sm4 >
                        <div style="font-size: 20px; font-family: 'Didot', sans-serif" :align="ADRSS">ADRESS</div>
                        <img  src="../imgs/trik.png" :align="ADRSS">
                        <br>
                        <div class="retreat" :align="ADRSS">
                            <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" >795 Folsom Ave</div>
                            <div style="font-size: 12px; font-family: 'Myriad Pro', sans-serif;" >Suite 600 San Francisco, CA94107</div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                SM: "center",
                ADRSS: "right"
            }
        },

        mounted() {
            this.mobile;
        },

        computed: {
            mobile() {
                let mobile = this.$store.getters.mobile;

                if (mobile) {
                    this.SM = "left";
                    this.ADRSS = "left";
                } else {
                    this.SM = "center";
                    this.ADRSS = "right";
                }

                return mobile;
            },
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
        margin-top: 8vw;
        margin-left: 10%;
        width: 80%;
        /*background-color: wheat;*/
    }
    hr {
        border: none;
        color: #1c9c83;
        background-color: #1c9c83;
        height: 2px;
    }
    .retreat {
        margin-top: 10px;
    }

</style>
