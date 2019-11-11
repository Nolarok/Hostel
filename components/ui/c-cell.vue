<template>
  <td v-if="!info.hidden">
    {{info.type === 'auto' ? info.data : null}}

    <c-actions
      v-if="info.type === 'actions'"
      :info="{
        data: info.data,
        id: info.id
      }"
    />

  </td>
</template>

<script>
  import CActions from "./c-actions"

  export default {
    name: "c-cell",
    components: {CActions},
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
