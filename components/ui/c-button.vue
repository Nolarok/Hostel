<template>
  <div
    @click.prevent="action"
    :class="'button ' + type"
    :style="{
      ...prop
    }"
  >
    <a href="#">
      <slot>

      </slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: "c-button",
    props: {
      type: {
        type: String,
        default: "text"
      },

      action: {
        type: Function,
        default: () => 0
      },

      prop: {
        type: Object,
        default: () => {}
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

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    //background: $color-contrast;

    color: $color-main;
    font-weight: 500;
    font-size: 1.4rem;

    cursor: pointer;

    svg {
      // ...
    }

    a {
      display: inherit;
      justify-content: inherit;
      align-items: inherit;

      height: 100%;
      width: 100%;


      font-weight: inherit;
      font-size: inherit;
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;

      &:visited {
        color: inherit;
      }
    }

    &:hover {
      // ...
    }
  }

  .text-svg {
    justify-content: space-between;

    padding: 0 .8rem;

    svg {
      /*padding-left: 1rem;*/
    }
  }

  .svg {
    height: 2rem;
    width: 2rem;

    padding: 0;

    border: none;
  }

  .text {
    height: 3.4rem;
    width: auto;
  }
</style>
