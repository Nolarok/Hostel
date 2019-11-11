<template>
  <div
    @click="handlerClick"
    :class="'color'"
    :style="{
      backgroundColor: color,
      border: active ? '.2rem solid #727272' : null,
      boxShadow: active ? '0 0 2rem 0 rgba(0, 0, 0, 0.75)' : 'null'
    }"
  >

  </div>
</template>

<script>
  export default {
    name: "c-color",
    props: {
      color: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handlerClick() {
        console.log(this.color)
        this.$emit('change', this.color)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .color {
    box-sizing: content-box;
    height: 2.5rem;
    width: 2.5rem;

    border-radius: 50%;

    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.75);

    cursor: pointer;

    &:hover {

    }
  }
</style>
