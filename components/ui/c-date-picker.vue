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
        const _date = new Date(date)
        const year = _date.getFullYear()
        const month = _date.getMonth()
        const day = _date.getDate()

        return `${this.toZero(day)}/${this.toZero(month + 1)}/${year}`
      },

      toZero(num) {
        return num > 9 ? num : '0' + num
      },

      handlerChange(value) {
        this.value = value
        this.$emit('change', this.formatDate(this.value))
        this.action(this.formatDate(this.value))
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

    .v-picker__title,
    .v-picker__title.primary {
      background: $color-main !important;
    }

    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: $color-main;
    }

    .v-date-picker-table .v-btn.v-btn--active.v-btn--text {
      color: #ffffff;
      background-color: $color-main;
    }
  }

  .page--mobile {
    .datepicker {
      display: flex;
      width: 29rem;
    }
  }
</style>
