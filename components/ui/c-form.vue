<template>
  <div :class="'form ' + addClass" role="form">
    <slot :controls="{close, form}">

    </slot>

    <div class="form__notice">
      <c-form-notice
        v-for="(message, index) in GET_FORM_ERRORS({form})"
        :key="index"
        :text="message"
      />
    </div>

    <div class="form__actions">
      <c-button
        :action="accept"
      >Применить
      </c-button>

      <c-button
        :action="cancel"
      >Отмена
      </c-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  import CButton from "./c-button"
  import CFormNotice from "./c-form-notice"

  export default {
    name: "c-form",
    components: {CFormNotice, CButton},
    props: {
      confirm: {
        type: Function,
        required: true
      },
      cancel: {
        type: Function,
        required: true
      },
      form: {
        type: String,
        required: true
      },
      additionalData: {
        type: Object,
        default: () => {}
      },
      endpoint: {
        type: String,
        required: true
      },
      addClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapGetters('forms', ['GET_FORM_ERRORS', 'GET_ALL_VALUES'])
    },
    methods: {
      ...mapActions('forms', ['SUBMIT']),
      ...mapMutations('forms', ['CHANGE_VALUES']),

      async accept() {
        const formData = this.GET_ALL_VALUES({form: this.form})

        const result = await this.SUBMIT({
          form: this.form,
          endpoint: this.endpoint,
          data: {...this.additionalData, ...formData}
        })

        if (result.success) {
          this.confirm(result.data)
          this.cancel()
        }
      },

      close() {},
      action() {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .form {
    box-sizing: border-box;
    padding: 2rem 2rem 0 2rem;

    &__actions {
      grid-column: 1 / 5;

      display: flex;

      justify-self: end;

      align-items: center;
      justify-content: flex-end;

      height: 6rem;
      width: 100%;

      border-top: .1rem solid $color-gray-1;

      & > .button {
        margin-right: 1rem;
      }
    }
  }
</style>
