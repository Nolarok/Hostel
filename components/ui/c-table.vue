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
        :info="hz[index]"
        :storePath="storePath"
      />
      </tbody>
    </table>
    <c-pagination
      :length="GET_PAGINATION_LENGTH"
      :action="CHANGE_OFFSET"
    />

    <c-drop
      @change="handlerChangeRowsPerPage"
    >
      <template #default="scope">
        <c-menu
          :data="[1, 2, 3, 5, 10, 20]"
          :default="0"
          :action="scope.controls.setValue"
        />
      </template>
    </c-drop>

    <c-drop icon="calendar">
      <template #default="scope">
        <c-date-picker
          :action="scope.controls.setValue"
        />
      </template>
    </c-drop>

  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapState, mapActions} from "vuex"
  import CCell from "./c-cell"
  import CRow from "./c-row"
  import CPagination from "./c-pagination"
  import CHeadRow from "./c-head-row"
  import CDropdown from "./c-dropdown"
  import CInput from "./c-input"
  import CDrop from "./c-drop"
  import CMenu from "./c-menu"
  import CDatePicker from "./c-date-picker"

  export default {
    name: "c-table",
    components: {CDatePicker, CMenu, CDrop, CInput, CDropdown, CHeadRow, CPagination, CRow, CCell},
    props: {
      storePath: {
        type: String,
        required: true
      }
    },

    data() {
      return {}
    },

    computed: {
      ...mapState('users', ['hz']),
      ...mapGetters('users', [
        'GET_HEADERS',
        'GET_TABLE_HEIGHT',
        'GET_OPTIONS',
        'GET_ROW_INFO',
        'GET_PAGINATION_LENGTH',
        'GET_ROWS_PER_PAGE'
      ]),
      test() {
        return this.$store.dispatch("users/GET_ROW_INFO1")
      }
    },

    methods: {
      handlerChangeRowsPerPage(value) {
        this.CHANGE_ROWS_PER_PAGE(value)
      },

      handlerInputSearch(value) {
        this.FILTER_BY_COL(value)
      },
      ...mapActions('users', ['GET_ROW_INFO1']),
      ...mapMutations('users', [
        'CHANGE_OFFSET',
        'CHANGE_ROWS_PER_PAGE',
        'FILTER_BY_COL',
      ])
    },

    beforeCreate() {
      // this.$options.computed = {
      //   ...this.$options.computed,
      //   ...mapGetters(this.$options.propsData.storePath, [
      //     'GET_HEADERS',
      //     'GET_TABLE_HEIGHT',
      //     'GET_OPTIONS',
      //     'GET_ROW_INFO',
      //     'GET_PAGINATION_LENGTH',
      //     'GET_ROWS_PER_PAGE'
      //   ]),
      // }

      // this.$options.computed = {
      //   ...this.$options.computed,
      //   ...mapGetters(this.$options.propsData.storePath, [])
      // }
      // this.dispatch('GET_ROW_INFO1')


    },

    beforeMount() {
      this.$store.dispatch("users/GET_ROW_INFO1")
    },

    update() {
      console.log('update')
    }
  }
</script>

<style scoped>

</style>
