<template>
    <main id="Works">
        <v-container float>
            <v-layout row wrap>
                <!--<div class="portfolioSection">-->
                    <!--<div class="workText">LATEST WORK</div>-->
                    <!--<div class="work">-->

                        <!--<div class="workBlock" v-for="item in items" v-bind:style="{'background-image': `url(${item.src})`}">-->
                            <!--<div class="workBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="more">VIEW MORE-->
                        <!--<span style="font-size: 20px; margin-left: 10px">→</span>-->
                    <!--</div>-->
                <!--</div>-->
                <v-flex xs12 sm8 offset-sm2>
                    <v-layout row class="text-latest-work">
                        LATEST WORK
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3  v-for="item in items" :key="item._id">
                            <v-card >
                                <v-card-media :src="item.src" height="200px"></v-card-media>
                                <div class="workBlockText">Lorem ipsum dolor sit amet.</div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 offset-sm10 >
                            <v-btn flat class="btnViewMore">VIEW MORE →</v-btn>
                        </v-flex>

                    </v-layout>

                </v-flex>

            </v-layout>
        </v-container>
    </main>

</template>

<script>
    export default {
        name: 'Works',
        data() {
            return {
                items: [
                    {
                        _id: 1,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1455463690915-11babbaa3218?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 2,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1474377207190-a7d8b3334068?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 3,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 4,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 5,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 6,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1451523217094-c60a00eda8c1?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 7,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1454922069690-ed3f6fcddb2b?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    },
                    {
                        _id: 8,
                        text: "Text",
                        src: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=",

                    }
                ]
            }
        },

        computed: {
            mobile() {
                return this.$store.getters.mobile;
            },
        }
    }
</script>

<style scoped>
    .text-latest-work {
        font-family: "effloresce";
        font-size: 250%;
        letter-spacing: 15px;
    }
    .btnViewMore {
        margin-right: 20px;
    }
    .headline-Latest-Work {
        font-size: xx-large;
    }
    .card {
        cursor: pointer;
        margin: 20px 10px 10px 10px;
    }
    .items {

        z-index: 0;
    }
    .container.grid-list-md .layout:only-child {
        margin: 100px  300px 300px 300px ;
    }
    .container.grid-list-md .layout .flex {
        padding: 20px;
    }



    .portfolioSection {
        width: 100vw;
        height: 100vh;
        /*background-color: red;*/
    }
    .workText {
        font-family: "Arial Rounded MT Bold";
        margin-top: 50px;
        margin-left: 25%;
        font-size: 30px;
    }

    .work {
        margin-left: calc(50% - 25%);
        margin-top: 5%;
        width: 50%;
        /*background-color: darkorange;*/
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 222px) ) ;
        grid-gap: 10px 15px;
        align-items: center;
        justify-content: center;
    }

    .workBlock {
        /*margin: auto;*/
        /*margin-top: 5%;*/
        width: 222px;
        height: 193px;
        background-image: url("https://images.unsplash.com/photo-1494707924465-e1426acb48cb?dpr=1&auto=format&fit=crop&w=250&h=200&q=80&cs=tinysrgb&crop=");
        background-size: cover;
    }


    .workBlockText {
        margin-top: -200px;
        position: absolute;
        display: table-cell;
        text-align: center;
        text-overflow: clip;
        overflow: hidden;
        transition: 1s;
        opacity: 0;
        width: 100%;
        height: 100%;
        color: white;
        vertical-align: middle;
    }

    .workBlockText:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        transition: 0.5s;
        opacity: 0.6;
        background-color: #232323;
    }

    .more {
        transition: 0.5s;
        position: absolute;
        font-size: 16px;
        font-family: "Arial Rounded MT Bold";
        padding: 10px;
        margin-left: 65.8%;
        margin-top: 113px;
        letter-spacing: 2px;
    }

    .more:hover {
        margin-top: 100px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border-radius: 5%;
        opacity: 0.7;
        transition: 0.5s;
        cursor: pointer;
        color: white;
        background-color: #4c5059;
    }

</style>
