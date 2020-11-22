<template>
<!-- Temporary template from homework2 -->
<section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form action="index.html" method="get">
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button v-on:click="logIn">Log In</button>
            </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

