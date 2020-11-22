<template>
    
        <div class="avatar-container">
          <img class="avatar" :src="profile.profile_src" @click="toggleVisibility">
          <div class="drop-down-container" v-show='!isHidden'>
            <span id="user-name">{{profile.firstname}} {{profile.lastname}}</span>
            <span id="user-email">{{profile.email}}</span>
            <span class="separator"></span>
            <span>
                <router-link :to="{path: '/browse' }">Browse</router-link>
            </span>
            <span class="separator"></span>
            <span>
                <router-link :to="{path: '/' }">Log In</router-link>
            </span>
          </div>
        </div>
    </template>

<script>

    export default {
        name: 'Profile',
        data: function () {
            return {
                isHidden: true,
            }
        },
        computed: {
            profile: function () {
                return this.$store.state.profile
            }
        },
        methods:{
          toggleVisibility: function() {
              this.isHidden = !this.isHidden;
              console.log(this.isHidden)
          }
        },
        mounted() {
            //console.log("Mounted");
            this.$store.dispatch("getProfile");
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
