<template>
  <div class="table">
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

    <div class="table__wrapper">
      <table class="table__content">
      <thead>
        <c-head-row
          :info="GET_HEADERS({table: tableName})"
        />
      </thead>
      <tbody>
      <c-row
        v-for="(row, index) in GET_TABLE_HEIGHT({table: tableName})"
        :key="row[0]"
        :info="GET_ROW_INFO({position: index, table: tableName})"
        :tableName="tableName"
      />
      </tbody>
    </table>
    </div>

    <div class="table__footer">
      <c-table-toolbar
        :actions="toolbarActions"
        :tableName="tableName"
      />

      <c-pagination
        :length="GET_PAGINATION_LENGTH({table: this.tableName})"
        :offset="GET_OFFSET({table: this.tableName})"
        :action="(value) => {CHANGE_OFFSET({value, table: this.tableName})}"
      />
    </div>
  </div>
</template>
<!--<c-drop icon="calendar">-->
<!--  <template #default="scope">-->
<!--    <c-date-picker-->
<!--      :action="scope.controls.setValue"-->
<!--    />-->
<!--  </template>-->
<!--</c-drop>-->

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
      tableName: {
        type: String,
        required: true
      },
      toolbarActions: {
        type: Array,
        default: () => []
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
        this.CHANGE_ROWS_PER_PAGE({value, table: this.tableName})
      },

      handlerInputSearch(value) {
        this.FILTER_BY_COL({value, table: this.tableName})
      },

      ...mapMutations('users', [
        'CHANGE_OFFSET',
        'CHANGE_ROWS_PER_PAGE',
        'FILTER_BY_COL',
      ])
    },

    mounted() {

    },
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .table {
    max-width: 1000px;
    /*overflow: hidden;*/

    &__wrapper {
      max-width: 100%;
      overflow-x: scroll;
    }

    &__content {
      width: 100%;

      margin: 1rem 0 1rem;

      border-collapse: collapse;

      font-size: 1.3rem;
    }

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
