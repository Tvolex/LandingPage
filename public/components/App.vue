<template>
    <v-app id="app">
        <my-header></my-header>
        <body-1></body-1>

        <router-link tag="v-btn" to="/asd"></router-link>

    </v-app>
</template>

<script>
    //import animate from 'animate.css'
    import 'vuetify/dist/vuetify.min.css'
    import header from './header.vue'
    import body1 from './body-1.vue'

    export default {
        components: {
            "my-header": header,
            "body-1": body1,
        },
        name: 'app',
        data() {
            return {
                msg: "Page 1 "
            }
        }
    }
</script>

<style>
    .application--light {
        background-color: rgb(238, 238, 240);
    }
</style>
