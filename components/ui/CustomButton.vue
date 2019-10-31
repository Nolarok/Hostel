<template>
  <div @click.prevent="action">
    <a href="#">
      <slot>

      </slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: "CustomButton",

    props: {
      title: {
        type: String,
        default: "text"
      },

      action: {
        type: Function,
        default: () => 0
      }

    },

    data() {
      return {

      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    background: $color-contrast;

    color: $color-main;

    cursor: pointer;

    a {
      display: inherit;
      justify-content: inherit;
      align-items: inherit;

      height: 100%;
      width: 100%;

      text-transform: uppercase;
      text-decoration: none;
      color: inherit;

      &:visited {
        color: inherit;
      }
    }
  }
</style>
