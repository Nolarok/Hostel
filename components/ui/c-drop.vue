<template>
  <div
    :class="'dropmenu ' + customClass"
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
      <div
        v-else
        :style="{fontSize: size || null}"
      >
        {{valueToString(value)}}
      </div>
    </div>
    <transition name="fade" mode="out-in" appear>
      <div
        v-if="isOpened"
        :class="{
          'dropmenu__content': true,
          'dropmenu__content--calendar': isCalendar
        }"
      >
        <slot :controls="{setValue}">

        </slot>
      </div>
    </transition>
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

      default: {},

      placeholder: {
        type: [String, Number],
        default: 'Выберите значение'
      },

      valueToString: {
        type: Function,
        default: (value) => {
          return value.toString()
        }
      },

      size: {
        type: String,
        default: ''
      },

      isCalendar: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        isOpened: false,
        value: this.default || '',
        customClass: ''
      }
    },

    methods: {
      handlerDropdownClick() {
        this.isOpened = true//!this.isOpened

        setTimeout(() => {
          console.log('open')
          if (this.isOpened) {
            window.addEventListener('click', this.handlerWindowClick)
          }
        }, 0)

      },

      handlerWindowClick(event) {
        event.stopPropagation()
        if (!this.elementInDropdown(event.target)) {
          this.isOpened = false
          window.removeEventListener('click', this.handlerWindowClick)
        }
      },

      elementInDropdown(node) {
        // console.log(node, node.parentElement)
        if (node === window || node === null) {
          return false
        }

        if (node.classList.contains('dropmenu__content')) {
          return true
        }

        return this.elementInDropdown(node.parentElement)
      },

      setValue(value) {
        setTimeout(() => {
          console.log('close')
          this.isOpened = false
          window.removeEventListener('click', this.handlerWindowClick)

        }, 10)

        this.value = value
        this.$emit('change', this.value)
      }
    },

    mounted() {
      this.$emit('change', this.value)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .dropmenu {
    box-sizing: border-box;
    position: relative;

    svg {
      position: absolute;
      right: 1rem;
    }

    &__placeholder {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      color: #757575;
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

      user-select: none;
      cursor: pointer;

      > div {
        width: 100%;

        padding-right: 2.8rem;
      }
    }

    &__content {
      box-sizing: border-box;
      position: absolute;

      top: calc(100% + .1rem);
      left: 0;
      min-width: 100%;

      z-index: 10;
    }
  }

  .page--mobile {
    .dropmenu {
      &__content {
        left: unset;
        right: 0;

        &--calendar {
          position: fixed;

          top: 12rem;
          left: calc(50% - 14.5rem);
          min-width: auto;
        }
      }
    }
  }

</style>
