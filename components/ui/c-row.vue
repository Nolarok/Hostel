<template>
  <tr
    :style="{backgroundColor: GET_ROW_COLOR({id: info.id, table: tableName})}"
    class="table__row"
  >
    <c-cell
      v-for="(cell, index) in info.data"
      :key="index"
      :tableName="tableName"
      :info="GET_CELL_INFO({position: {i: info.position, j: index}, table: tableName})"
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
      tableName: {
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
