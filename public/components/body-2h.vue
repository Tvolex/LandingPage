<template>
    <v-app>
        <div class="portfolioSection">
            <div class="workText">LATEST WORK</div>
            <div class="work">
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, totam!</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor sit amet.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis dolorem ducimus facilis fugiat ipsum itaque libero quibusdam, quidem quos.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum dolor sit.</div></div>
                <div class="workBlock"><div class="workBlockText">Lorem ipsum.</div></div>
            </div>
            <div class="more">VIEW MORE
                <span style="font-size: 20px; margin-left: 10px">→</span>
            </div>
        </div>
    </v-app>

</template>

<script>
    export default {
        name: 'body-2',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .portfolioSection {
        position: absolute;
        margin-top: 52%;
        width: 100%;
        height: 844px;
        /*background-color: red;*/
    }

    .work {
        margin-left: calc(50% - 25%);
        margin-top: calc(50% - 35%);
        width: 50%;
        height: 100%;
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
        background-image: url("1.jpg");
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
