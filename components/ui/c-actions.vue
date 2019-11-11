<template>
  <div class="actions">
    <c-action
      v-for="(item, index) in info.data"
      :key="index"
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
    },

    data() {
      return {}
    },

    methods: {},

    mounted() {
    }

  }
</script>

<style lang="scss" scoped>
  .actions {
    display: flex;
    justify-content: space-between;
  }
</style>

