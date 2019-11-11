<template>
  <div class="confirm">
    <div class="confirm__question">
      {{question}}
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
  export default {
    name: "c-confirm",
    components: {CButton},
    props: {
      question: {
        type: String,
        default: ''
      },

      payload: {
        type: Array,
        default: () => []
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

    methods: {
      action() {
        this.confirm.apply(this, this.payload)
        this.cancel()
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
