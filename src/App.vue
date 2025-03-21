<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RouterLink to="/">Go to Home</RouterLink>
    <div>break line</div>
    <RouterLink to="/about">Go to About</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterLink,
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
