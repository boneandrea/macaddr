<template>
<div>
  <h1>{{ title }}</h1>
  <div class="columns"
       v-on:myAdd="alert(5)">
    <div class="column is-one-quarter">
      <input v-model="mac" class="input"
             v-bind:class="{ 'is-danger': !checkMacAddr, 'is-success': checkMacAddr}"
             autofocus=true placeholder="macaddr"/>
      <span v-if="checkMacAddr">OK</span><span v-else>NG</span>
    </div>
    <div class="column is-one-quarter">
      <input v-model="name" class="input"
             v-bind:class="{ 'is-danger': !checkName, 'is-success': checkName}"
             placeholder="device name" />
      <span v-if="checkName">OK</span><span v-else>NG</span>
    </div>
    <div class="column is-one-quarter">
      <button class="button" v-on:click="add">Add</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'New',
  data () {
    return {
      title: '新規作成',
      mac: '',
      name: ''
    }
  },
  computed: {
    // 算出 getter 関数
    checkMacAddr: function () {
      return this.mac.match(/^([0-9A-Fa-f]{2}:){5}([0-9A-Fa-f]{2})$/) != null
    },
    checkName: function () {
      return this.name.length > 0
    }
  },
  methods: {
    add: function () {
      if (this.checkMacAddr && this.checkName) {
        const newItem = {macaddr: this.mac, description: this.name}
        let params = new URLSearchParams()
        params.append('macaddr', this.mac)
        params.append('description', this.name)

        axios.post('http://localhost:3001/users', params)
          .then(response => {
            console.log('送信したテキスト: ' + response.data.text)
          }).catch(error => {
            console.log(error)
          })

        this.$eventHub.$emit('myAdd', newItem)
        console.log('sent')
        this.mac = ''
        this.name = ''
      }
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
