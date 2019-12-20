<template>
  <div :class="{
    'table': true,
    'table__test': true,
    'table--wide': isWide,
    [addClass]: !!addClass
  }">
    <div class="table__filters">
      <c-input
        :options="{
          placeholder: 'Поиск...'
        }"
        @input="handlerInputSearch"
      />
      <div
        class="table__filter-date"
        v-if="dateFilter"
      >
        <div>
        <span>C: </span>
        <c-drop
          icon="calendar"
          :default="formatDate(from)"
          placeholder="C"
          size="1.3rem"
          :is-calendar="true"
          @change="(val) => {changeDate(val, 'from')}"
        >
          <template #default="scope">
            <c-date-picker
              :action="scope.controls.setValue"
            />
          </template>
        </c-drop>
        </div>
        <div>
        <span>По: </span>

        <c-drop
          icon="calendar"
          :default="formatDate(to)"
          placeholder="По"
          size="1.3rem"
          :is-calendar="true"
          @change="(val) => {changeDate(val, 'to')}"
        >
          <template #default="scope">
            <c-date-picker
              :action="scope.controls.setValue"
            />
          </template>
        </c-drop>
        </div>
      </div>
      <div class="table__filter-rows">
        <span>Записей на странице:</span>
        <c-drop
          @change="handlerChangeRowsPerPage"
          :default="10"
        >
          <template #default="scope">
            <c-menu
              :data="[1, 3, 5, 10, 15, 20]"
              :default="{index: 1}"
              :action="scope.controls.setValue"
            />
          </template>
        </c-drop>
      </div>
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

<script>
  import {mapGetters, mapMutations, mapActions} from "vuex"
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
      CSvg, CButton, CDatePicker, CMenu, CDrop, CInput, CDropdown, CHeadRow, CPagination, CRow, CCell
    },
    props: {
      tableName: {
        type: String,
        required: true
      },
      toolbarActions: {
        type: Array,
        default: () => []
      },
      endpoint: {
        type: String,
        required: true
      },
      dateFilter: {
        type: Boolean,
        default: false
      },

      addClass: {
        type: [String, Boolean],
        default: false
      }
    },

    data() {
      return {
        isWide: true,
        from: new Date(),
        to: new Date(+new Date() + 86400000)
      }
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

      stringToDate(date) {
        const regexp = /(\d{2})\/(\d{2})\/(\d{2,4})/
        const parsedDate = date.match(regexp)

        if (!parsedDate) return null

        return new Date(`${parsedDate[3]}/${parsedDate[2]}/${parsedDate[1]}`)
      },

      formatDate(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()

        return `${this.toZero(day)}/${this.toZero(month + 1)}/${year}`
      },

      toZero(num) {
        return num > 9 ? num : '0' + num
      },

      changeDate(date, field) {
        this[field] = this.stringToDate(date)
        this.GET_TABLE_DATA({
          to: this.to,
          from: this.from,
          table: this.tableName,
          endpoint: this.endpoint
        })
      },

      handlerResize() {
        if (window.innerWidth <= 600) {
          this.isWide = false
        }
      },

      ...mapMutations('users', [
        'CHANGE_OFFSET',
        'CHANGE_ROWS_PER_PAGE',
        'FILTER_BY_COL',
      ]),

      ...mapActions('users', [
        'GET_TABLE_DATA'
      ])
    },

    mounted() {
      this.GET_TABLE_DATA({
        to: this.to,
        from: this.from,
        table: this.tableName,
        endpoint: this.endpoint,
      })

      this.$bus.$on('aside-change', (value) => {
        this.isWide = value
      })

      window.addEventListener('resize', this.handlerResize)
    },

    destroyed() {
      window.removeEventListener('resize', this.handlerResize)
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .table {
    $r: &;
    position: relative;
    box-sizing: border-box;

    &__wrapper {
      overflow-x: scroll;
      width: calc(100vw - 31rem);
    }

    &--wide &__wrapper {
      width: calc(100vw - 15rem);
    }

    &__content {
      grid-column: 1 / 2;
      width: 100%;

      margin: 1rem 0 1rem;

      border-collapse: collapse;

      font-size: 1.3rem;

      > thead > tr > th {
        vertical-align: top;

        padding: 1rem;
        border-bottom: .1rem solid $color-gray-1;
      }

      > tbody > tr > td {
        max-width: 40rem;


        padding: .4rem 1rem;

        border-bottom: .1rem solid $color-gray-1;
        border-left: .1rem solid $color-gray-1;

        &:first-child {
          border-left: none;
        }
      }

    }

    &__filters {
      box-sizing: border-box;
      display: flex;

      max-width: 98%;

      justify-content: space-between;
      align-items: flex-end;

      .input {
        height: 3rem;
      }

      .dropmenu {
        height: 3rem;

        &__value {
          height: 3rem;
        }
      }
    }

    &__filter-date {
      display: flex;
      align-items: center;

      span {
        margin: 0 1rem;
        font-size: 1.4rem;
      }
    }

    &__filter-rows {
      display: flex;
      align-items: center;

      span {
        margin-right: 1rem;
        font-size: 1.4rem;
      }
    }

    &__footer {
      display: flex;

      justify-content: space-between;
      align-items: center;

      margin: 2rem 0;
      padding: 0 2rem;
    }
  }

  .page--mobile {
    .table {
      $r: '.table';

      &__filters {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;

        > div {
          flex: 1 0 100%;
          margin-bottom: 1rem;
        }
      }

      &__filter-date {
        justify-content: space-evenly;
        flex-wrap: wrap;


        > div {
          display: flex;
          flex: 1 0 100%;
          align-items: center;
          justify-content: center;

          &:first-child {
            margin-bottom: 1rem;
          }
        }

        span {
          width: 2rem;
        }
      }

      &__filter-rows {
        justify-content: space-between;
      }

      &__wrapper {
        width: 100%;
      }

      th {
        display: none;
      }

      &__row {
        display: flex;
        flex-wrap: wrap;

        margin-bottom: .5rem;

        border: .1rem solid $color-main;


        &:first-child {
          /*display: none;*/
        }

        &:nth-child(2) {
          border-top: .1rem solid $color-main;
        }
      }

      &--guests {
        #{$r}__cell {
          display: none;
          border: none;

          &:nth-child(2) { // edit
            display: block;
            border-bottom: .1rem dashed $color-main;
            border-right: .1rem dashed $color-main;
            flex: .3 1 auto;
          }

          &:nth-child(3) { // status
            display: block;
            border-bottom: .1rem dashed $color-main;
            border-right: .1rem dashed $color-main;
            flex: .3 1 auto;
          }

          &:nth-child(4) { // checkin
            display: block;
            flex: .5 0 auto;

            border-bottom: .1rem dashed $color-main;
            text-align: center;
          }

          &:nth-child(7) { // name
            display: block;
            flex: 1 0 100%;

            > div {
              text-align: center;
            }
          }

          &:nth-child(18) { // actions
            flex: 1 0 100%;
            display: flex;

            border-top: .1rem dashed $color-main;

            > .actions {
              display: flex;
              justify-content: center;
              width: 100%;
            }
          }

        }
      }

      &--users {
        #{$r}__cell {
          flex: 1 0 33.33%;
          text-align: center;

          &:nth-child(1) {
            display: none;
          }

          &:nth-child(n + 5) {
            flex: 1 0 100%;
          }

        }
      }

      &__footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .table__toolbar {
          flex: 1 0 100%;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .pagination {
          flex: 1 0 100%;
          flex-wrap: wrap;
          justify-content: center;

          > li {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>
