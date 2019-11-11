<template>
  <div class="table__wrapper">
    <c-input
      :options="{
         placeholder: 'Поиск...'
      }"
      @input="handlerInputSearch"
    />
    <table class="table">
      <thead>
        <c-head-row
          :info="GET_HEADERS"
        />
      </thead>
      <tbody>
      <c-row
        v-for="(row, index) in GET_TABLE_HEIGHT"
        :key="row[0]"
        :info="GET_ROW_INFO(index)"
        :storePath="storePath"
      />
      </tbody>
    </table>
    <c-pagination
      :length="GET_PAGINATION_LENGTH"
      :action="CHANGE_OFFSET"
    />
    <c-dropdown
      @change="handlerChangeRowsPerPage"
      :data="[1, 2, 3, 5, 10, 20]"
      :active-index="[1, 2, 3, 5, 10, 20].indexOf(GET_ROWS_PER_PAGE)"
    />
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex"
  import CCell from "./c-cell"
  import CRow from "./c-row"
  import CPagination from "./c-pagination"
  import CHeadRow from "./c-head-row"
  import CDropdown from "./c-dropdown"
  import CInput from "./c-input"

  export default {
    name: "c-table",
    components: {CInput, CDropdown, CHeadRow, CPagination, CRow, CCell},
    props: {
      storePath: {
        type: String,
        required: true
      }
    },

    data() {
      return {}
    },

    computed: {},

    methods: {
      handlerChangeRowsPerPage(value) {
        this.CHANGE_ROWS_PER_PAGE(value)
      },

      handlerInputSearch(value) {
        this.FILTER_BY_COL(value)
      },

      ...mapMutations('users', [
        'CHANGE_OFFSET',
        'CHANGE_ROWS_PER_PAGE',
        'FILTER_BY_COL',
      ])
    },

    beforeCreate() {
      this.$options.computed = {
        ...this.$options.computed,
        ...mapGetters(this.$options.propsData.storePath, [
          'GET_HEADERS',
          'GET_TABLE_HEIGHT',
          'GET_OPTIONS',
          'GET_ROW_INFO',
          'GET_PAGINATION_LENGTH',
          'GET_ROWS_PER_PAGE'
        ]),
      }

      // this.$options.computed = {
      //   ...this.$options.computed,
      //   ...mapGetters(this.$options.propsData.storePath, [])
      // }
    },

    mounted() {

    },

    update() {
      console.log('update')
    }
  }
</script>

<style scoped>

</style>
