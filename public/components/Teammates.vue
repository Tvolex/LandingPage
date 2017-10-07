<template>
    <main>
        <v-parallax src="imgs/4.jpg" height="700">
            <v-container float>
                <v-layout row wrap class="team">
                    <v-flex xs12 class="text-xs-center">
                        <v-layout>
                            <v-flex style="font-size: x-large"  xs12 class="text-xs-center">
                                MEET OUR TEAM
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12 md8 offset-md2 class="text-xs-center" style="filter: brightness(100%); z-index:5">
                                Some text about our team. Some text about our team. Some text about our team. Some text about our team
                                Some text about our team. Some text about our team. Some text about our team. Some text about our team
                                Some text about our team. Some text about our team. Some text about our team. Some text about our team
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 class="text-xs-center teammatesAvatarsLine">
                        <v-layout row no-wrap>
                            <v-flex xs12 class="text-xs-center">
                                <v-avatar
                                        size="150"
                                        class="grey lighten-4"
                                        v-for="teammate in teammates"
                                        :key="teammate.name"
                                        style="cursor: pointer; margin:10px"
                                        v-on:click="selectTeammate(teammate)"
                                >
                                    <img :src="teammate.photo" alt="avatar">
                                </v-avatar>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12>
                        <v-layout row>
                            <v-flex xs12 md8 offset-md2>
                                <v-layout row wrap>
                                    <v-flex xs12 md4>
                                        <v-avatar
                                                size="200"
                                                class="grey lighten-4 currentTeammateAvatar"
                                        >
                                            <img :src="currentTeammate.photo" alt="avatar">
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <span>{{currentTeammate.name}}</span><br>
                                        <span>{{currentTeammate.status}}</span><br>
                                        <v-layout row wrap>
                                            <v-flex xs12>
                                                {{currentTeammate.description}}
                                            </v-flex>
                                        </v-layout>

                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>


                </v-layout>
            </v-container>
        </v-parallax>
    </main>

</template>

<script>
    export default {
        name: 'body4',
        data() {
            return {
                currentTeammate: null,
            }
        },

        beforeCreate() {
            const teammates = this.$store.dispatch('teammates');
        },

        created() {
            this.currentTeammate = this.$store.getters.teammates[0];
        },

        computed: {
            teammates() {
                return this.$store.getters.teammates;

            }
        },

        methods: {
            selectTeammate(teammate) {
                this.currentTeammate = teammate;
            },

            enter: function (el, done) {
                alert("2");
                done()
            },
        },
    }
</script>

<style scoped>
    .currentTeammateAvatar {
        width: minmax(100px, 200px);
    }
    .teammatesAvatarsLine {
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .img {
        margin-top: 0;
        width: 100%;
        height: 100%;
    }
</style>
