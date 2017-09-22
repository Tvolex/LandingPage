<template>
    <v-parallax src="imgs/4.jpg"></v-parallax>
</template>

<script>
    export default {
        name: 'body4',
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
