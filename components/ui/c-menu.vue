<template>
  <ul class="menu">
    <li
      class="menu__item"
      v-for="(item, index) in data"
      :key="index"
      @click="handlerClick(index)"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "c-menu",

    props: {
      data: {
        type: Array,
        required: true
      },

      default: {
        type: Object,
        default: () => {return {index: 0}}
      },

      action: {
        type: Function,
        default: () => 0
      }
    },

    data() {
      return {
        value: this.data[this.default.index] || this.default.value
      }
    },

    methods: {
      handlerClick(index) {
        this.value = this.data[index]
        this.$emit('change', this.value)
        this.action(this.value)
      }
    },

    created() {
      console.log('======', this.value)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .menu {
    box-sizing: border-box;
    flex-direction: column;


    margin: 0;
    padding: 0;
    background: $color-contrast;

    border: .1rem solid $color-main;

    border-radius: .5rem;

    overflow: hidden;

    list-style: none;
    user-select: none;
    cursor: pointer;

    &__item {
      display: flex;
      align-items: center;

      height: 4.2rem;

      padding: 0 0 0 .8rem;

      font-size: 1.3rem;

      border-top: .1rem solid $color-gray-1;

      &:first-child {
        border-top: none;
      }

      &:hover {
        background: $color-gray-2;
      }
    }

  }


</style>
