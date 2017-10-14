<template>
    <v-parallax src="imgs/footer.jpg" height="90">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs6 offset-xs3>
                    <div align="center">Copyright {{currentYear}} <span style="color: blue">APT</span>| All Rights Reserved</div>
                </v-flex>
            </v-layout>
        </v-container>

    </v-parallax>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

<style>


</style>
