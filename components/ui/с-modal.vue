<template>
  <transition name="fade" mode="out-in" appear>
    <div
      v-if="isOpened"
      class="modal"
      ref="modal">

      <slot :controls="{close}">

      </slot>

    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      externalOpen: {
        type: Function,
        required: true
      },

      externalClose: {
        type: Function,
        default: () => 0
      },
    },

    name: "c-modal",
    data() {
      return {
        isOpened: false
      }
    },

    methods: {
      open() {
        this.isOpened = true
        setTimeout(() => {
          this.$refs['modal'].addEventListener('click', this.handlerModalBackgroundClose)
        }, 0)
      },

      close() {
        this.isOpened = false
      },

      handlerModalBackgroundClose(event) {
        if (event.target === event.currentTarget) {
          this.close()
          this.$refs['modal'].removeEventListener('click', this.handlerModalBackgroundClose)
        }
      }
    },

    mounted() {
      this.externalOpen(this.open)
      this.externalClose(this.close)
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    background: rgba(#000000, .5);

    z-index: 10;
  }

</style>
