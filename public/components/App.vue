<template>
    <v-app id="app">
        <my-header></my-header>
        <v-flex xs1 offset-xs11 lg1 offset-lg11>
            <div class="stepper">

                <div class="card-nav">

                    <ul>
                        <li><span>Home</span></li> <div class="circle"></div><br>
                        <li><span>Skills</span></li> <div class="circle"></div><br>
                        <li><span>Portfolio</span></li> <div class="circle"></div><br>
                        <li><span>Team</span></li> <div class="circle"></div><br>
                        <li><span>Contact</span></li> <div class="circle"></div><br>

                    </ul><div class="vertLine"></div>
                </div>


            </div>
        </v-flex>

        <body-1></body-1>

        <router-link tag="v-btn" to="/asd"> Page 2</router-link>



    </v-app>
</template>

<script >
    //import animate from 'animate.css'
    import 'vuetify/dist/vuetify.min.css'
    import header from './header.vue'
    import stepper from './stepper.vue'
    import body1 from './body-1.vue'

    export default {
        components: {
            "my-header": header,
            "stepper": stepper,
            "body-1": body1,
        },
        name: 'main',
        data() {
            return {
                msg: "Page 1 "
            }
        }
    }
</script>

<style lang="scss">

    .application--light {
        background-color: rgb(238, 238, 240);
    }
    .stepper {
        position: fixed;

    }
    .card-nav {
        padding: 0;
        margin: 0;
        list-style: none;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
    }
    .vertLine {
        height: 170px;
        width: 2px;
        border: 1px solid rgb(199,199,201);
        margin-left: 92px;
        margin-top: -200px;
        font: xx-small rgb(199,199,201);
    }
    .circle {
        top: 50%;
        margin-left: 60px;
        margin-top: -20px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid rgb(199,199,201);
        background-color: rgb(199,199,201);
    }
</style>
