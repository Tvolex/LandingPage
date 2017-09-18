<template >
    <v-toolbar light class="header">
        <v-spacer></v-spacer>
        <v-toolbar-title>APT</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
            <v-btn flat>{{ item.text }}</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {
                items: [
                    {text: 'Home'},
                    {text: 'Skills'},
                    {text: 'Portfolio'},
                    {text: "Team"},
                    {text: "Contact"},
                ]
            }
        }
    }
</script>

<style scoped>
    .application .theme--light.toolbar {
        background: rgba(218, 218, 218, 0.7);
    }
</style>
