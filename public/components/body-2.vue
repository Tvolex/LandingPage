<template>
    <v-app>
        <main>
            <br><br>
            <v-layout >
                <v-flex xs12 offset-xs3>
                    <span class="headline-Latest-Work">LATEST WORK</span>
                </v-flex>
            </v-layout>
        </main>
        <main class="application application--white" id="cards">
            <v-container grid-list-md>

                <v-layout row wrap class="items">
                    <v-flex xs12 sm6 md3  class="item-card"  v-for="item in items" tag="v-card" v-bind:key="item._id">
                        <v-card>
                            <v-card-media
                                    class="white--text"
                                    v-bind:src="item.src"
                                    height="200px"
                            ></v-card-media>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </main>

    </v-app>

</template>

<script>
    export default {
        name: 'body-2',
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
        }
    }
</script>

<style scoped>
    .headline-Latest-Work {
        font-size: xx-large;
    }
    .item-card {

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
</style>
