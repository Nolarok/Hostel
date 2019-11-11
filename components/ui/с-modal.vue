<template>
  <div
    v-if="isOpened"
    class="modal"
    ref="modal">

    <slot :controls="{close}">

    </slot>

  </div>
</template>

<script>
  export default {
    props: {
      externalOpen: {
        type: Function,
        required: true
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
    }
  }
</script>

<style lang="scss" scoped>
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
