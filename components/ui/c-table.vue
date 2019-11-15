<template>
  <div class="table__wrapper">
    <div class="table__filters">
      <c-input
        :options="{
         placeholder: 'Поиск...'
      }"
        @input="handlerInputSearch"
      />

      <c-drop
        @change="handlerChangeRowsPerPage"
        :default="10"
      >
        <template #default="scope">
          <c-menu
            :data="[1, 2, 3, 5, 10, 20]"
            :default="{index: 0}"
            :action="scope.controls.setValue"
          />
        </template>
      </c-drop>
    </div>

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

    <div class="table__footer">
      <c-table-toolbar
        :actions="['create_user', 'upload']"
      />

      <c-pagination
        :length="GET_PAGINATION_LENGTH"
        :offset="GET_OFFSET"
        :action="CHANGE_OFFSET"
      />
    </div>

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
  import {mapGetters, mapMutations} from "vuex"
  import CCell from "./c-cell"
  import CRow from "./c-row"
  import CPagination from "./c-pagination"
  import CHeadRow from "./c-head-row"
  import CDropdown from "./c-dropdown"
  import CInput from "./c-input"
  import CDrop from "./c-drop"
  import CMenu from "./c-menu"
  import CDatePicker from "./c-date-picker"
  import CButton from "./c-button"
  import CSvg from "./c-svg"
  import CDialog from "./c-dialog"
  import CTableToolbar from "./c-table-toolbar"

  export default {
    name: "c-table",
    components: {
      CTableToolbar,
      CDialog,
      CSvg, CButton, CDatePicker, CMenu, CDrop, CInput, CDropdown, CHeadRow, CPagination, CRow, CCell},
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
      ...mapGetters('users', [
        'GET_HEADERS',
        'GET_TABLE_HEIGHT',
        'GET_OPTIONS',
        'GET_ROW_INFO',
        'GET_PAGINATION_LENGTH',
        'GET_OFFSET',
        'GET_ROWS_PER_PAGE',
      ]),
    },

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
    },

    mounted() {

    },

    update() {
    }
  }
</script>

<style lang="scss">
  .table {
    @import "../../assets/scss/vars";

    width: 100%;

    margin: 1rem 0 1rem;

    border-collapse: collapse;

    font-size: 1.3rem;

    &__filters {
      display: flex;

      justify-content: space-between;
      align-items: flex-end;
    }

    &__footer {
      display: flex;

      justify-content: space-between;
      align-items: center;

      margin-bottom: 2rem;
      padding:  0 2rem;
    }

    th {
      padding: 1rem;
      border-bottom: .1rem solid $color-gray-1;
    }

    td {
      max-width: 40rem;


      padding: .4rem 1rem;

      border-bottom: .1rem solid $color-gray-1;
      border-left: .1rem solid $color-gray-1;

      &:first-child {
        border-left: none;
      }
    }
  }
</style>
