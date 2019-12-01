<template>
  <td v-if="!info.hidden">
    {{['auto', 'date'].includes(info.type) ? info.data : null}}

    <c-actions
      v-if="info.type === 'actions'"
      :tableName="tableName"
      :info="{
        data: info.data,
        id: info.id
      }"
    />

    <div class='status-wrapper' v-if="info.type === 'status'">
      <c-status
        v-for="(status, index) in info.data"
        :key="index"
        :type="status"
      />
    </div>

    <div v-if="info.type === 'set'">
      <div
        v-for="(item, index) in info.data"
        :key="index"
      >{{item.length === 0 ? '' : item}}</div>
    </div>

  </td>
</template>

<script>
  import CActions from "./c-actions"
  import CStatus from "./c-status"

  export default {
    name: "c-cell",
    components: {CStatus, CActions},
    props: {
      info: {
        type: Object,
        required: true
      },
      tableName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .status-wrapper {
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-between;
  }
</style>
