<template>
    <v-app>
        <v-container float>
            <v-layout row wrap>
                <div class="portfolioSection">
                    <div class="workText">LATEST WORK</div>
                    <div class="work">

                        <div class="workBlock" v-for="item in items" v-bind:style="{'background-image': `url(${item.src})`}">
                            <div class="workBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div class="more">VIEW MORE
                        <span style="font-size: 20px; margin-left: 10px">→</span>
                    </div>
                </div>
            </v-layout>
        </v-container>
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



    .portfolioSection {
        position: absolute;
        width: 100%;
        height: 844px;
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
        display: table-cell;
        text-align: center;
        text-overflow: clip;
        overflow: hidden;
        transition: 1s;
        opacity: 0;
        width: 222px;
        height: 193px;
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
