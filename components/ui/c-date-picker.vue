<template>
  <div class="datepicker">
    <v-date-picker
      v-model="value"
      locale="ru"
      first-day-of-week="1"
      @change="handlerChange"
    />
  </div>
</template>

<script>
  export default {
    name: "c-date-picker",
    props: {
      action: {
        type: Function,
        default: () => 0
      }
    },
    data() {
      return {
        value: new Date().toISOString().substr(0, 10),
        isOpened: false
      }
    },
    methods: {
      formatDate(date) {
        return date.split('-').reverse().join('/')
      },

      handlerChange(value) {
        this.value = value
        this.$emit('change', this.value)
        this.action(this.value)
      },

      handlerClick() {
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
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .datepicker {
    position: relative;
    width: 100%;

    .v-picker__title {
      background: $color-main;
    }

    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: $color-main;
    }

    .v-date-picker-table .v-btn.v-btn--active.v-btn--text {
      color: #ffffff;
      background-color: $color-main;
    }

  }
</style>
