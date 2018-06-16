<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <hr>
    <ItemList/>
    <hr>
    <New/>
    <hr>
    <LoginOut/>
  </div>
</template>

<script>
import LoginOut from '@/components/LoginOut'
import New from '@/components/New'
import ItemList from '@/components/ItemList'

export default {
  components: {
    LoginOut,
    New,
    ItemList
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'MACアドレス管理'
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
