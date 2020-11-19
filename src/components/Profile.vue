<template>
    <section>
        <div class="avatar-container">
          <img class="avatar" :src="profile.profile_src" @click="toggleVisibility">
          <div class="drop-down-container" v-show='!isHidden'>
            <span id="user-name">{{profile.firstname}} {{profile.lastname}}</span>
            <span id="user-email">{{profile.email}}</span>
            <span class="separator"></span>
            <span>
              <a href="browse.html">Browse</a>
            </span>
            <span class="separator"></span>
            <span>
              <a href="login.html">Log Out</a>
            </span>
          </div>
        </div>
    </section>
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
