<template>
  <div :class="classNames">
    {{ value }}
    <div
    > 1 </div>
  </div>
</template>

<script>
  export default {
    name: "GridTableCell",
    props: {
      value: String,
      modificators: Array,
      actions: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    computed: {
      classNames() {
        return this.modificators.length ?
          [''].concat(this.modificators).join(' table__cell--') + ' table__cell' :
          'table__cell'
      },
      type() {
        return this.modificators.contains('actions') ? 'actions' : 'cell'
      }
    }
  }
</script>

<style scoped>

</style>
