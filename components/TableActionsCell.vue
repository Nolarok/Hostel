<template>
  <div class="table-actions">
    <v-tooltip
      bottom
      v-if="isDisplayed('edit')"
    >
      <template
        v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          @click="actions['edit'].func(recordId)">

          {{ info['edit'].icon }}
        </v-icon>
      </template>
      <span> {{ info['edit'].tooltip }} </span>
    </v-tooltip>

    <v-tooltip
      bottom
      v-if="isDisplayed('delete')"
    >
      <template
        v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          @click="actions['delete'].func(recordId)">

          {{ info['delete'].icon }}
        </v-icon>
      </template>
      <span> {{ info['delete'].tooltip }} </span>
    </v-tooltip>

    <v-tooltip
      bottom
      v-if="isDisplayed('fill')"
    >
      <template
        v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          @click="actions['fill'].func(recordId)">

          {{ info['fill'].icon }}
        </v-icon>
      </template>
      <span> {{ info['fill'].tooltip }} </span>
    </v-tooltip>

    <TableAction :icon="info['edit'].icon">

    </TableAction>
  </div>
</template>

<script>
  import {
    mdiDelete,
    mdiPrinterPos,
    mdiAccountEdit,
    mdiFormatColorFill,
  } from '@mdi/js/mdi'
  import TableAction from "./TableAction"
  import ColorPicker from "./ColorPicker"

  export default {
    name: "TableActionsCell",
    components: {TableAction, ColorPicker},

    data() {
      return {
        info: {
          delete: {
            icon: mdiDelete,
            tooltip: 'Удалить'
          },
          print: {
            icon: mdiPrinterPos,
            tooltip: 'Печать'
          },
          edit: {
            icon: mdiAccountEdit,
            tooltip: 'Редактировать'
          },
          fill: {
            icon: mdiFormatColorFill,
            tooltip: 'Заливка'
          },
        }
      }
    },
    props: {
      recordId: {
        type: [String, Number],
        required: true
      },
      actions: {
        type: Array,
        required: true
      }
    },
    methods: {
      isDisplayed(action) {
        return !!this.actions.find(item => item.type === action)
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .table-actions {
    display: flex;
  }
</style>
