<template>
    <v-app id="app">
        {{msg}}
        <router-link tag="v-btn" to="/"> Page 1</router-link>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: "Page 2"
            }
        }
    }
</script>

<style>


</style>
