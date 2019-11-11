<template>
  <div class="table-statuses">
    <v-tooltip
      bottom
      v-for="(status, index) in statuses"
      :key="index"
    >
      <template v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          :color="getStatus(status).color">
          {{ getStatus(status).icon }}
        </v-icon>
      </template>
      <span>{{ getStatus(status).descr }}</span>
    </v-tooltip>
  </div>
</template>

<script>
  import {
    mdiCurrencyRub,
    mdiAccount,
    mdiAccountOff,
  } from '@mdi/js'

  export default {
    name: "TableStatusesCell",
    props: {
      statuses: {
        type: Array,
        default: () => ['isCheckin', 'isNotCheckin', 'isPaid', 'isNotPaid']
      },
    },
    data() {
      return {
        icons: {
          ruble: mdiCurrencyRub,
          user: mdiAccount,
          userOff: mdiAccountOff
        },
      }
    },
    methods: {
      getStatus(status) {
        switch (status) {
          case 'Заехал':
            return {
              icon: this.icons['user'],
              descr: 'Заехал',
              color: 'black'
            }
          case 'Не заехал':
            return {
              icon: this.icons['userOff'],
              descr: 'Не заехал',
              color: 'red'
            }

          case 'Оплачено':
            return {
              icon: this.icons['ruble'],
              descr: 'Оплачено',
              color: 'green'
            }

          case 'Не оплачено':
            return {
              icon: this.icons['ruble'],
              descr: 'Не оплачено',
              color: 'red'
            }

          default:
            return {
              icon: this.icons['ruble'],
              desr: 'Не оплачено',
              color: 'red'
            }

        }
      }
    }
  }
</script>

<style scoped>
  .table-statuses {
    display: flex;
  }

  .hidden-status {
    font-size: 0;
    width: 0;
    /*visibility: hidden;*/
  }
</style>
