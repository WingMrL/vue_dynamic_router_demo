<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <RouterLink to="/">Go to Home</RouterLink>
    <div>break line</div>
    <RouterLink to="/about">Go to About</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'HelloWorld',
  components: [RouterLink],
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
