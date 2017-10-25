<template >
    <div dark style="max-height: 1px">

        <v-toolbar light class="toolbar">
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <router-link tag="v-btn" class="btn btn--flat" to="/" style="font-size: larger" >APT</router-link>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items dark class="hidden-xs-only">
                <router-link
                        tag="v-btn"
                        v-for="item in items"
                        class="btn btn--flat"
                        to="/"
                        :key="item.text"
                        v-on:click.native="scroll(item.link)"
                >
                    {{ item.text }}
                </router-link>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>

<script>
    import icon from "vue-icon"
    import resize from "vue-resize-directive"
    export default {

        name: 'header',
        directives: {
            resize,
            icon,
        },
        data() {

            return {
                items: [
                    {text: 'Home', link: "#Home", icon: "home"},
                    {text: 'Skills', link: "#Works", icon: "done_all"},
                    {text: 'Reviews', link: "#Reviews", icon: "feedback"},
                    {text: "Team", link: "#Team", icon: "perm_identity"},
                    {text: "Contact", link: "#Contact", icon: "call"},
                ],
            }
        },

        methods: {
            scroll(item) {
                this.$scrollTo(item, 500, {y: true});
            }
        },
    }
</script>

<style scoped>
    .application .theme--light.toolbar {
        background: rgba(218, 218, 218, 0.7);
    }
    .toolbar {
        box-shadow: none;
        background-color: rgb(216, 217, 218);
        z-index: 10;
    }
</style>
