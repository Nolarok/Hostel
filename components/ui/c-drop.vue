<template>
  <div
    class="dropmenu"
    @click="handlerDropdownClick"
  >
    <div class="dropmenu__value">
      <CSvg :svg="icon" :prop="{height: icon === 'triangle' ? '1rem' : '2rem'}"/>
      <input type="hidden" :value="toString(value)">
      <div
        class="dropmenu__placeholder"
        v-if="!valueToString(value).trim()"
      >
        {{placeholder}}
      </div>
      <div v-else>
        {{valueToString(value)}}
      </div>
    </div>
    <div
      v-if="isOpened"
      class="dropmenu__content"
    >
      <slot :controls="{setValue}">

      </slot>
    </div>
  </div>
</template>

<script>
  import CSvg from "./c-svg"

  export default {
    name: "c-drop",
    components: {CSvg},
    props: {

      icon: {
        type: String,
        default: 'triangle'
      },

      placeholder: {
        type: String,
        default: 'Выберите значение...'
      },

      valueToString: {
        type: Function,
        default: (value) => {
          return value.toString()
        }
      }
    },

    data() {
      return {
        isOpened: false,
        value: ''
      }
    },

    methods: {
      handlerDropdownClick() {
        this.isOpened = !this.isOpened

        // handlerWindowClick = handlerWindowClick.bind(this)

        setTimeout(() => {
          if (this.isOpened) {
            window.addEventListener('click', this.handlerWindowClick)
          }
        }, 0)

      },

      handlerWindowClick(event) {
        event.stopPropagation()
        this.isOpened = false
        window.removeEventListener('click', this.handlerWindowClick)
      },

      setValue(value) {
        this.value = value
        this.$emit('change', this.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .dropmenu {
    box-sizing: border-box;
    position: relative;

    svg {
      position: absolute;
      right: 1rem;
    }

    &__value {
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 4.2rem;
      width: 100%;

      padding: 0 .8rem;

      border: .1rem solid $color-main;
      border-radius: .5rem;

      font-size: 1.8rem;
    }

    &__content {
      box-sizing: border-box;
      position: absolute;

      left: 0;
      min-width: 100%;

      z-index: 10;
    }
  }
</style>
