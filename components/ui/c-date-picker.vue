<template>
  <div class="datepicker">
    <div
      class="datepicker__value"
      @click="handlerClick"
    >
      {{formatDate(value)}}
      <c-svg svg="calendar" class="datepicker__icon"/>
    </div>
    <div
      class="datepicker__calendar"
      v-if="isOpened"
    >
      <v-date-picker
        v-model="value"
        locale="ru"
        first-day-of-week="1"
      />
    </div>
  </div>
</template>

<script>
  import CSvg from "./c-svg"

  export default {
    name: "c-date-picker",
    components: {CSvg},
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
    width: 14rem;


    &__value {
      position: relative;
      display: flex;
      align-items: center;

      height: 4.2rem;
      width: 14rem;

      padding: 1rem;

      border: .1rem solid $color-main;
      border-radius: .5rem;

      font-size: 1.6rem;

      cursor: pointer;
    }

    &__calendar {
      position: absolute;
      left: 0;
    }

    &__icon {
      position: absolute;

      right: 1rem;
    }

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
