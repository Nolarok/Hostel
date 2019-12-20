<template>
  <div class="report">
    <div class="report__label">{{label}}</div>

    <div class="report__date">
      <div class="report__field-title">С:</div>
      <c-drop
        icon="calendar"
        :default="from"
        placeholder="От"
        size="1.3rem"
        :is-calendar="true"
        @change="(value) => {this.from = value}"
      >
        <template #default="scope">
          <c-date-picker
            :is-calendar="true"
            :action="scope.controls.setValue"
          />
        </template>
      </c-drop>
    </div>

    <div class="report__date">
      <div class="report__field-title">По:</div>
      <c-drop
        icon="calendar"
        :default="to"
        placeholder="По"
        size="1.3rem"
        :is-calendar="true"
        @change="(value) => {this.to = value}"
      >
        <template #default="scope">
          <c-date-picker
            :action="scope.controls.setValue"
          />
        </template>
      </c-drop>
    </div>
    <c-button
      :action="handlerClick"
    >Загрузить
    </c-button>

  </div>
</template>

<script>
  import CInput from "./c-input"
  import CDatePicker from "./c-date-picker"
  import CDrop from "./c-drop"
  import CButton from "./c-button"

  const day = 86400000

  export default {
    name: "c-report",
    components: {CButton, CDrop, CDatePicker, CInput},
    props: {
      label: {
        type: String,
        required: true
      },
      action: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        from: this.formatDate(new Date()),
        to: this.formatDate(new Date()),
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

      handlerClick() {
        this.action({
          from: this.from,
          to: this.to
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .report {
    $r: '.report';

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    height: 3rem;

    font-size: 1.6rem;

    &__label {
      flex: 1 0 100%;
    }

    &__date {
      display: flex;
      height: 100%;

      &:nth-child(3) {
        #{$r}__field-title {
          padding: 0 1rem;
        }
      }
    }

    &__field-title {
      display: flex;
      align-items: center;

      padding-right: 1rem;
    }

    .dropmenu {
      height: 100%;

      &__value {
        height: 100%;
      }
    }

    .button {
      height: 100%;

      margin-left: 2rem;
    }
  }

  .page--mobile {
    .report {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      height: auto;

      padding: 2rem 0;

      border-bottom: .1rem solid $color-main;
      border-top: .1rem solid $color-main;


      &__label {
        margin-bottom: 1rem;
        text-align: center;
      }

      &__date {
        flex: 1 0 100%;
        justify-content: center;
        margin-bottom: 1rem;
        height: 3rem;
      }

      &__field-title {
        width: 3rem;
        padding: 0 !important;
      }
    }
  }
</style>
