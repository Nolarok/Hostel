<template>
  <v-app>
    <div class="ui" id="ui">
      <v-text-field
        v-model="table.search"
        append-icon=""
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        :headers="table.headers"
        :items="table.data"
        :search="table.search"
      >

        <template v-slot:item.status="{ item }">
          <TableStatusesCell
            :style="{backgroundColor: item.fill}"
            :statuses="item.status"
          />
        </template>

        <template v-slot:item.checkIn="{ item }">
          <div
            :style="{backgroundColor: item.fill}"
          >
            {{ item.checkIn }}
          </div>
        </template>

        <template v-slot:item.time="{ item }">
          <div
            :style="{backgroundColor: item.fill}">

            {{ item.time }}
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <TableActionsCell
            :actions="table.actions"
            :recordId="item.id"
          />
        </template>
      </v-data-table>
      <v-date-picker
        v-model="picker"
        dark="true"
        locale="ru"
        first-day-of-week="1"
      />
    </div>
  </v-app>
</template>

<script>
  import TableStatusesCell from "../components/TableStatusesCell"
  import TableActionsCell from "../components/TableActionsCell"

  import { mapGetters, mapActions } from "vuex"


  export default {
    name: "ui-kit",
    components: {TableStatusesCell, TableActionsCell},
    data() {
      return {
        table: {
          headers: [
            {text: '#', value: 'num'},
            {text: 'Статус', value: 'status'},
            {text: 'Дата заезда', value: 'checkIn'},
            {text: 'Время', value: 'time'},
            {text: 'Дата выезда', value: 'checkOut'},
            {text: 'Ф.И.О.', value: 'fullName'},
            {text: 'Факт бронь, фирма, счет', value: 'fact'},
            {text: 'Категория по запросу', value: 'category'},
            {text: 'Питание', value: 'food'},
            {text: '№ счета / нал, цена', value: 'bill'},
            {text: 'Отметки об оплате', value: 'paid'},
            {text: 'Контакты', value: 'contact'},
            {text: 'Оплата', value: 'payment'},
            {text: 'Комментарий гостя', value: 'commentary'},
            {text: 'Дополнительно', value: 'advanced'},
            {text: 'Действия', value: 'actions'},
          ],
          data: [],
          search: '',
          actions: [
            { type: 'delete', func: async (id) => { await this.DELETE_ROW({id});this.table.data = this.GET_TABLE_DATA } },
            { type: 'fill', func: async (id) => { await this.FILL_ROW({id, color: 'red'})} },
            { type: 'edit', func: (id) => {console.log(this.$store.state)} }
          ]
        },
      }
    },
    computed: {
      ...mapGetters("visitors", ["GET_TABLE_DATA"])
    },

    methods: {
      ...mapActions("visitors", ["GET_DATA", "DELETE_ROW", "FILL_ROW"])
    },

    async mounted() {
      await this.GET_DATA({token: 123123})
      this.table.data = this.GET_TABLE_DATA
    }
  }
</script>

<style lang="scss">
  .ui {
    display: grid;

    grid-auto-rows: min-content;
    grid-gap: 1rem;

    margin: 2rem 2rem;
  }

  #ui {
    .v-data-table {
      overflow: hidden;
    }

    .v-data-table__wrapper {
      overflow: hidden;

      table {
        display: block;
        overflow: auto;
      }

      td {
        padding: 0;

        & > div {
          display: flex;

          align-items: center;
          justify-content: center;

          height: 100%;
        }
      }

      td:nth-child(6) {
        min-width: 25rem;
      }
    }
  }


</style>
