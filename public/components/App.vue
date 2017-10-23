<template>
    <v-app id="app" onresize="mobile">
        <my-header></my-header>
        <v-flex xs1 offset-xs11 lg1 offset-lg11>
            <div class="stepper">

                <div class="card-nav">
                    <scrollactive ref="scrollactive" :offset="120">
                        <ul class="nav-center">
                            <li class="nav-item"><a href="#Home" class="scrollactive-item nav-item">Home<div class="circle"></div></a></li>
                            <li class="nav-item"><a href="#Works" class="scrollactive-item nav-item">Works<div class="circle"></div></a></li>
                            <li class="nav-item"><a href="#Reviews" class="scrollactive-item nav-item">Reviews<div class="circle"></div></a></li>
                            <li class="nav-item"><a href="#Team" class="scrollactive-item nav-item">Team<div class="circle"></div></a></li>
                            <li class="nav-item"><a href="#Contact" class="scrollactive-item nav-item">Contact<div class="circle"></div></a></li>
                            <div class="vertLine"></div>
                        </ul>
                    </scrollactive>

                </div>


            </div>
        </v-flex>

        <Home></Home>
        <Works></Works>
        <Reviews></Reviews>
        <Teammates></Teammates>
        <ContactUs></ContactUs>
        <my-footer></my-footer>



    </v-app>
</template>

<script >
    //import 'animate.css'
    import 'vuetify/dist/vuetify.min.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import header from './header.vue'
    import stepper from './stepper.vue'
    import Home from './Home.vue'
    import Works from './Works.vue'
    import Reviews from './Reviews.vue'
    import Teammates from './Teammates.vue'
    import ContactUs from './ContactUs.vue'
    import footer from './footer.vue'

    export default {

        components: {
            "my-header": header,
            "stepper": stepper,
            "Home": Home,
            "Works": Works,
            "Reviews": Reviews,
            "Teammates": Teammates,
            "ContactUs": ContactUs,
            "my-footer": footer,
            "swiper": swiper,
            "swiper-slide": swiperSlide,
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


        created(){
            const updateMobile = () => { this.$store.dispatch('mobile') };

            updateMobile();

            window.addEventListener('resize', function () {
                updateMobile();
            });


        },

        methods: {


        },
    }
</script>

<style lang="scss">
    .nav-center {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: -webkit-center;
    }

    .nav-center li {
        margin-top: 40px;
    }
    .nav-item {
        color: rgb(200, 200, 200);
        text-decoration: none;
    },
    .is-active div {
        background-color:  rgb(75, 80, 90);
    }
    .is-active {
        color: rgb(75, 80, 90);
    }
    .application--light {
        background-color:white; //rgb(238, 238, 240);
    }
    .stepper {
        position: fixed;
        z-index: 1;
    }
    .card-nav {
        padding: 0;
        margin-top: -50px;
        list-style: none;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;

    }
    .vertLine {
        height: 250px;
        position: absolute;
        border: 1px solid #c7c7c9;
        margin-left: 102px;
        margin-top: -260px;
        z-index: -1;
    }
    .circle {
        top: 50%;
        margin-left: 92px;
        margin-top: -20px;
        width: 22px;
        height: 22px;
        border-radius: 12px;
        border: 1px solid rgb(199,199,201);
        background-color: rgb(199,199,201);
    }
</style>
