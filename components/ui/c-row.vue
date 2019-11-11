<template>
  <tr
    :style="{backgroundColor: info.options.color}"
  >
    <c-cell
      v-for="(cell, index) in info.data"
      :key="index"
      :info="GET_CELL_INFO({i: info.position, j: index})"
    >
      {{cell}}
    </c-cell>
  </tr>
</template>

<script>
  import CCell from "./c-cell"
  import { mapGetters } from "vuex"

  export default {
    name: "c-row",

    components: {CCell},

    props: {
      info: {
        type: Object,
        required: true
      },
      storePath: {
        type: String,
        required: true
      }
    },

    computed: {

    },

    beforeCreate() {
      this.$options.computed = {
        ...this.$options.computed,
        ...mapGetters(this.$options.propsData.storePath, ['GET_CELL_INFO']),
      }
    },
  }
</script>

<style scoped>

</style>
