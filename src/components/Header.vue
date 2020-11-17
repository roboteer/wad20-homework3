<template>
    <header>
      <nav>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
        <div class="avatar-container">
          <img class="avatar">
          <div class="drop-down-container">
            <span id="user-name">John Doe</span>
            <span id="user-email"></span>
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
      </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
