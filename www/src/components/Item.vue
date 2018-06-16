<template>
<li>
  <div class="columns">
    <div class="column">
      <input v-model="item.macaddr" class="input" v-bind:disabled="!editing"/>
    </div>
    <div class="column">
      <input v-model="item.description" class="input" v-bind:disabled="!editing"/>
    </div>
    <div class="column">
      <button class="button" v-on:click="edit">edit</button>
      <button class="button" v-on:click="remove(item.id)">remove</button>
    </div>
  </div>
</li>
</template>

<script>
import swal from 'sweetalert2'
export default {
  'name': 'Item',
  props: ['item'],
  data () {
    return {
      editing: false
    }
  },
  methods: {
    edit: function () {
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
          this.$emit('remove', index)
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
</style>
