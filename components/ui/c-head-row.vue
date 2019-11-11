<template>
  <tr>
    <c-head-cell
      v-for="(cell, index) in info"
      :key="index"
      :value="cell"
    />
  </tr>
</template>

<script>
  import CHeadCell from "./c-head-cell"
  export default {
    name: "c-head-row",
    components: {CHeadCell},
    props: {
      info: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
