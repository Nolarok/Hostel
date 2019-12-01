<template>
  <div class="confirm">
    <div class="confirm__question">
      {{question}}
    </div>
    <div class="form__notice">
      <c-form-notice
        v-for="(message, index) in errors"
        :key="index"
        :text="message"
      />
    </div>
    <div class="confirm__actions">
      <c-button
        :action="action"
      >Да</c-button>
      <c-button
       :action="cancel"
      >Отмена</c-button>
    </div>
  </div>
</template>

<script>
  import CButton from "./c-button"
  import CFormNotice from "./c-form-notice"
  export default {
    name: "c-confirm",
    components: {CFormNotice, CButton},
    props: {
      question: {
        type: String,
        default: ''
      },

      payload: {
        type: Object,
        default: () => {}
      },

      confirm: {
        type: Function,
        default: () => 0
      },

      cancel: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        errors: []
      }
    },

    methods: {
      async action() {
        const result = await this.confirm.call(this, this.payload)
        if (!result.error) {
          this.cancel()
          return
        }

        this.errors.push(result.error)
      }
    },

    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

.confirm {
  padding: 1rem;
  padding-bottom: 0;

  &__question {
    font-size: 1.6rem;
    padding: 1rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 6rem;

    border-top: .1rem solid $color-gray-1;

    & > .button {
      margin-right: 1rem;
    }

  }
}
</style>
