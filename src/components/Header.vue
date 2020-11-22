<template>
    <header>
      <nav>
        <div class="logo-container">
          <router-link :to="{path: '/' }">
              <img src="../assets/logo.png" alt="postIt">
          </router-link>
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
        <Profile></Profile>
      </nav>
    </header>
</template>

<script>
    import Profile from './Profile'
    export default {
        name: 'Header',
        components: {
          Profile
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
