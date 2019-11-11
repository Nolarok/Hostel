<template>
  <div :class="'dropdown ' + (isOpened ? 'opened' : '')"
       @click="handlerDropdownClick"
  >
    <input type="hidden" :value="value">
    <span class="active-item">{{ value }}</span>
    <CSvg svg="triangle" :prop="{height: '1.1rem'}"/>
    <ul :class="'list'">
      <li class="item"
        v-for="(item, index) in data"
        @click="handlerItemClick(item)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import CSvg from "./c-svg"
  export default {
    name: "c-dropdown",
    components: { CSvg },
    props: {
      data: {
        type: Array,
        required: true
      },
      activeIndex: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        value: this.data[this.activeIndex],
        isOpened: false
      }
    },
    methods: {
      handlerItemClick(value) {
        this.value = value
        this.$emit('change', this.value)
      },

      handlerDropdownClick() {
        this.isOpened = !this.isOpened

        function handlerWindowClick(event) {
          event.stopPropagation()
          this.isOpened = false
          window.removeEventListener('click', handlerWindowClick)
        }

        handlerWindowClick = handlerWindowClick.bind(this)

        setTimeout(() => {
          if (this.isOpened) {
            window.addEventListener('click', handlerWindowClick)
          }
        }, 0)

      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  .dropdown {
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: space-between;

    height: 4.2rem;
    width: 100%;

    padding: 0 .8rem;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    font-size: 1.8rem;

    .active-item {

    }

    .list {
      box-sizing: border-box;
      position: absolute;
      display: none;
      flex-direction: column;

      top: calc(100% + .1rem);
      left: -.1rem;

      width: calc(100% + .2rem);

      margin: 0;
      padding: 0;
      background: $color-contrast;

      border: .1rem solid $color-main;
      border-top: none;
      border-bottom-left-radius: .5rem;
      border-bottom-right-radius: .5rem;

      overflow: hidden;

      list-style: none;
    }

    .item {
      display: flex;
      align-items: center;

      height: 4.2rem;

      padding: 0 0 0 .8rem;

      &:first-child {

      }

      &:hover {
        background: $color-gray-2;
      }
    }
  }

  .opened {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .list {
      display: flex;
    }

    .active-item {

    }
  }
</style>
