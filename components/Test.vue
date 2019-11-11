<template>
  <div @click="handlerClick">
    <div>------Test-------</div>
    <div>------Test-------</div>
    <div>{{value}}</div>
    <div>------Test-------</div>
    <div>------Test-------</div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex"

  export default {
    name: "Test",
    // data() {
    //   return {
    //     value: "FOOOO"
    //   }
    // },
    methods: {
      ...mapMutations("test", ["SET_VALUE"]),

      handlerClick() {
        this.SET_VALUE(Math.round(Math.random() * 1000) + "")
      }
    },
    computed: {
      ...mapState("test", ["value"])
    }
  }
</script>

<style scoped>
div {
  user-select: none;
}
</style>
