<template>
  <div class="actions">
    <c-action
      v-for="(item, index) in info.data"
      :key="index"
      :tableName="tableName"
      :info="{
        type: item,
        id: info.id
      }"
    />
  </div>
</template>

<script>
  import CAction from "./c-action"

  export default {
    name: "c-actions",
    components: {CAction},
    props: {
      info: {
        type: Object,
        required: true
      },
      tableName: {
        type: String,
        required: true
      },
    },

    data() {
      return {}
    },

    methods: {},

    mounted() {
      console.log('info.data', this.info.data)
    }

  }
</script>

<style lang="scss" scoped>
  .actions {
    display: flex;
    justify-content: space-between;
  }
</style>

