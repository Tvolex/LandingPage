<template >
    <div dark style="max-height: 1px">
        <v-navigation-drawer temporary v-model="sideNav">
            <v-list>
                <v-list-tile to="#">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>ATP</v-list-tile-content>
                </v-list-tile>
                <hr>

                <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ item.text }}</v-list-tile-content>
                </v-list-tile>



            </v-list>

        </v-navigation-drawer>
        <v-toolbar light class="toolbar">
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <router-link tag="v-btn" class="btn btn--flat" to="/" style="font-size: larger">APT</router-link>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items dark class="hidden-xs-only">
                <router-link
                        tag="v-btn"
                        v-for="item in items"
                        class="btn btn--flat"
                        :to="item.link"
                        :key="item.text">
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
                sideNav: false,
                items: [
                    {text: 'Home', link: "#Home"},
                    {text: 'Skills', link: "#Skills"},
                    {text: 'Portfolio', link: "#Portfolio"},
                    {text: "Team", link: "#Team"},
                    {text: "Contact", link: "#Contact"},
                ],
            }
        }
    }
</script>

<style scoped>
    .application .theme--light.toolbar {
        background: rgba(218, 218, 218, 0.7);
    }
    .toolbar {
        box-shadow: none;
        background-color: rgb(216, 217, 218)
    }
</style>
