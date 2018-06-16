<template>
<div>
  <!-- // see https://bulma.io/documentation/form/ -->
  <h1>{{ title }}</h1>
  <ul>
    <Item @remove="remove" v-for="item in items" v-bind:key="item.id" v-bind:item="item"/>
  </ul>
</div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert2'
import Item from '@/components/Item'
export default {
  name: 'ItemList',
  data () {
    return {
      title: 'ItemList',
      items: []
    }
  },
  components: {
    'Item': Item
  },
  methods: {
    add: function (e) {
      this.items.push(e)
    },
    edit: function (e) {
    },
    remove: function (index) {
      const arr = this.items
      this.items.forEach(function (e, i) {
        if (e.id === index) {
          arr.splice(i, 1)
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  },
  mounted: function () {
    axios.get('http://localhost:3001/users')
      .then(response => {
        console.log(response.data.macaddrs)
        this.items = response.data.macaddrs
      }).catch(error => {
        console.log(error)
      })
  },
  created: function () {
    this.$eventHub.$on('myAdd', this.add)
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
