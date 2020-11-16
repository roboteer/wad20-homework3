<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlogPosts />
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
import BlogPosts from './components/BlogPosts.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    BlogPosts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
