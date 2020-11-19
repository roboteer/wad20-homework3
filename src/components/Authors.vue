<template>
    <section>
    <Header></Header>
        <section class="main-container">
            <div class="profile" v-for="(author, index) in authors" :key="index">
                <img :src="author.avatar" :alt="`${author.firstname} ${author.lastname}`">
                <h2>{{author.firstname}} {{author.lastname}}</h2>
                <button class="follow-button" @click="myToggleFunction($event)">Follow</button>
            </div>
        </section>
    </section>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        name: 'Authors',
        components: {
            Header
        },
        methods: { //todo: "followed" status could/should be stored in state?
            myToggleFunction: function(event){
                let button = event.target;
                if (button.classList.contains('followed')) {
                    button.classList.remove('followed')
                    button.textContent = 'Follow';
                } else {
                    button.classList.add('followed')
                    button.textContent = 'Followed';
                }
            }
        },
        computed: {
            authors: function () {
                return this.$store.state.authors
            }
        },
        filters: {

        },
        mounted() {
            //console.log("Mounted");
            this.$store.dispatch("getAuthors");
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
