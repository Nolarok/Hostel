<template>
  <th>
    {{value}}
  </th>
</template>

<script>
  export default {
    name: "c-head-cell",
    props: {
      value: {
        type: String,
        default: '-'
      }
    }
  }
</script>

<style scoped>

</style>
