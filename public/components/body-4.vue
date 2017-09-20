<template>
    <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter">
        <img class="img" id="anchor2" src="imgs/2.jpg" alt="a">
    </transition>
</template>

<script>
    export default {
        name: 'body3',
        data() {
            return {

            }
        },

        methods: {
            beforeEnter: function (el) {
                alert("1")
            },
            enter: function (el, done) {
                alert("2");
                done()
            },
        },
    }
</script>

<style scoped>
    .img {
        margin-top: 0;
        width: 100%;
        height: 100%;
    }
</style>
