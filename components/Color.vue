<template>
  <v-btn
    fab
    :style="{background: color}"
    @click="handlerClick">
  </v-btn>
</template>

<script>
    export default {
    name: "Color",
    props: {
      color: {
        type: String,
        default: "#ffffff"
      },
      getColor: {
        type: Function,
        required: true
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handlerClick() {
        this.getColor.call(this, this.color)
      }
    }
  }
</script>

<style scoped>
</style>
