<template>
    <v-app>
        <div class="portfolioSection">
            <div class="workText">LATEST WORK</div>
            <div class="work">
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
                <div class="workBlock"></div>
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

    .workText {
        font-family: "Arial Rounded MT Bold";
        margin-top: 100px;
        margin-left: 25%;
        font-size: 30px;
    }

    .work {
        /*background-color: green;*/
        margin-left: 23.6%;
        margin-top: 26px;
        width: 52%;
        height: 447px;
    }

    .workBlock {
        transition: 0.3s;
        margin-top: 62px;
        margin-left: 20px;
        display: inline-block;
        position: relative;
        background-color: red;
        width: 222px;
        height: 193px;
        background-image: url("1.jpg");
        background-size: cover;
    }

    .workBlock:hover {
        width: 222px;
        height: 193px;
        border-radius: 5%;
        transition: 0.5s;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
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
