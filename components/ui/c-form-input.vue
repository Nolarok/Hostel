<template>
  <div :class="'form-input ' + addClass">

    <div class="form-input__label">
      <span
        v-if="IS_REQUIRED({form, name: field})"
        class="form-input__required"
      >*&nbsp;</span>{{label}}:
    </div>

    <div class="form-input__content-wrapper">
      <div class="form-input__error">
        {{ GET_ERROR({form, name: field}) }}
      </div>

      <div class="form-input__content">
        <slot :controls="{
          changeValue,
          default: GET_VALUE({form, name: field})
        }">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import CInput from "./c-input"

  export default {
    name: "c-form-input",
    components: {CInput},
    props: {
      form: {
        type: String,
        required: true
      },
      field: {
        type: String,
        required: true
      },
      label: {
        type: String,
        default: 'Unnamed field'
      },
      addClass: {
        type: String,
        default: ''
      }
    },

    computed: {
      ...mapGetters('forms', ['GET_ERROR', 'GET_VALUE', 'IS_REQUIRED'])
    },

    methods: {
      ...mapMutations('forms', ['CHANGE_VALUE', 'CHANGE_VALUES']),

      // ...mapActions('forms', ['']),

      changeValue(value) {
        this.CHANGE_VALUE({
          value,
          name: this.field,
          form: this.form,
        })
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .form-input {
    display: grid;
    grid-template-columns: 12rem 20rem;

    justify-content: space-between;
    align-items: center;

    /*width: 40rem;*/

    padding: 1rem 0;

    &__label {
      margin-right: 1rem;

      font-size: 1.6rem;
      /*white-space: nowrap;*/

    }

    &__error {

    }

    &__required {
      color: red;
    }

    &__content {

    }

  }
</style>
