<template>
<li>
  <div class="columns">
    <div class="column" v-on:dblclick="toggleEditable">
      <input v-model="item.macaddr" class="input" v-bind:disabled="!editing" />
    </div>
    <div class="column" v-on:dblclick="toggleEditable">
      <input v-model="item.description" class="input" v-bind:disabled="!editing"/>
    </div>
    <div class="column">
      <button class="button" v-on:click="update">update</button>
      <button class="button" v-on:click="remove(item.id)">remove</button>
    </div>
    <div class="column msg">
      {{resultMessage}}
    </div>
  </div>
</li>
</template>

<script>
import swal from 'sweetalert2'
import axios from 'axios'
export default {
  'name': 'Item',
  props: ['item'],
  data () {
    return {
      editing: false,
      resultMessage: ' '
    }
  },
  methods: {
    update: function () {
      axios.put('http://' + window.location.hostname + ':3001/users/' + this.item.id + '?_method=PUT',
        this.item)
        .then(response => {
          this.resultMessage = 'updated'
          setTimeout(() => { this.resultMessage = '' }, 1000)
        }).catch(error => {
          console.log(error)
        })
    },
    toggleEditable: function () {
      this.editing = !this.editing
    },
    remove: function (index) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete('http://' + window.location.hostname + ':3001/users/' + index + '?_method=DELETE', {data: {id: index}})
            .then(response => {
              console.log(response)
              this.$emit('remove', index)
            }).catch(error => {
              console.log(error)
            })
        }
      })
    }
  },
  mounted () {
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
.msg{
  color: #f00;
}
</style>
