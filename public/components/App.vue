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
                        <li v-on:click="asd" ><router-link to="#contact_us"> <span>Contact</span></router-link></li> <div class="circle"></div><br>

                    </ul><div class="vertLine"></div>
                </div>


            </div>
        </v-flex>

        <body-1></body-1>
        <body-2></body-2>
        <body-3></body-3>
        <body-4></body-4>
        <body-5></body-5>
        <my-footer></my-footer>

        <router-link tag="v-btn" to="/asd"> Page 2</router-link>



    </v-app>
</template>

<script >
    //import 'animate.css'
    import 'vuetify/dist/vuetify.min.css'

    import header from './header.vue'
    import stepper from './stepper.vue'
    import body1 from './body-1.vue'
    import body2 from './body-2.vue'
    import body3 from './body-3.vue'
    import body4 from './body-4.vue'
    import body5 from './body-5.vue'
    import footer from './footer.vue'

    export default {

        components: {
            "my-header": header,
            "stepper": stepper,
            "body-1": body1,
            "body-2": body2,
            "body-3": body3,
            "body-4": body4,
            "body-5": body5,
            "my-footer": footer,
        },

        name: 'main',
        data() {
            return {
                msg: "Page 1 ",
                items: [
                    {
                        _id: 1,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1493994492236-f8d411fd81b6?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 2,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 3,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 4,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 5,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1493994492236-f8d411fd81b6?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 6,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 7,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 8,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=600&h=400&q=80&cs=tinysrgb&crop=",

                    }
                ]
            }
        },

        methods: {
            asd() {
                this.$router.push("#contact_us")
            },
        },
    }
</script>

<style lang="scss">

    .application--light {
        background-color: rgb(238, 238, 240);
    }
    .stepper {
        position: fixed;
        z-index: 1;
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
