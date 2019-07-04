<template>
<div>
  <h1>{{ msg }}</h1>
  <div class="columns">
    <div class="column is-one-quarter">
      <button>a</button>
    </div>
    <div class="column is-one-quarter">
      <button>logout</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginOut',
  data () {
    return {
      msg: 'ログイン　ログアウト'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
