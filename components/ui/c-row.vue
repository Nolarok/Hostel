<template>
  <tr
    :style="{backgroundColor: GET_ROW_COLOR(info.id)}"
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
      ...mapGetters('users', ['GET_CELL_INFO', 'GET_ROW_COLOR'])
    },


    beforeCreate() {

    },

    mounted() {

    }
  }
</script>

<style scoped>

</style>
