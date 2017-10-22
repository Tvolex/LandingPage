<template>
    <v-app id="app" onresize="mobile">
        <my-header></my-header>
        <v-flex xs1 offset-xs11 lg1 offset-lg11>
            <div class="stepper">

                <div class="card-nav">
                    <scrollactive ref="scrollactive" :offset="200">
                        <ul class="nav-center">
                            <li><a href="#Home" class="scrollactive-item nav-item">Home</a></li>
                            <li><a href="#Works" class="scrollactive-item nav-item">Works</a></li>
                            <li><a href="#Reviews" class="scrollactive-item nav-item">Reviews</a></li>
                            <li><a href="#Team" class="scrollactive-item nav-item">Team</a></li>
                            <li><a href="#Contact" class="scrollactive-item nav-item">Contact</a></li>

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
    .nav-item {
        color: #7a7a7a;
    }
    .is-active {
        color: #00d1b2;
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
