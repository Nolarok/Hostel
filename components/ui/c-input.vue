<template>
  <div class="input-wrapper">
    <div class="input-error">{{this.errorMessage || " "}}</div>
    <input
      v-if="options.type !== 'textarea'"
      v-model="value"
      :class="'input ' + (!isValid ? 'invalid' : '')"
      @input="handlerInput"

      :type="options.type"
      :id="options.id"
      :name="options.name"
      :placeholder="options.placeholder"
    />

    <textarea
      v-else
      v-model="value"
      :class="'textarea ' + (!isValid ? 'invalid' : '')"
      @input="handlerInput"
      :id="options.id"
      :name="options.name"
      :placeholder="options.placeholder"
    ></textarea>

  </div>

</template>

<script>
  export default {
    name: "c-input",
    props: {
      validators: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Object,
        default() {
          return {
            placeholder: 'Введите данные...',
            type: 'text',
            default: ''
          }
        }
      }
    },

    data() {
      return {
        value: this.options.default,
        errorMessage: ''
      }
    },

    computed: {
      isValid: function () {
        return this.validators.every(validator => {
          const result = validator(this.value)
          if (!result.value) this.errorMessage = result.message

          return result.value
        })
      }
    },

    methods: {
      handlerInput() {
        this.errorMessage = ""
        if (!this.isValid) {
          this.$emit('input', '~~error~~')
        } else {
          this.$emit('input', this.value)
        }
      },

      handlerChange() {
        if (!this.isValid) {
          this.$emit('change', '~~error~~')
        } else {
          this.$emit('change', this.value)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars.scss";

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
  }

  .input {
    box-sizing: border-box;
    height: 4.2rem;
    width: 100%;

    padding: 0 .8rem;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    font-size: 1.8rem;
  }

  .textarea {
    box-sizing: border-box;
    height: 8.4rem;

    padding: .4rem .8rem;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    font-size: 1.8rem;
    font-family: 'Roboto', Arial, serif;

    resize: none;

    div {
      height: 100%;
      width: 100%;
    }
  }

  .textarea.invalid,
  .input.invalid {
    color: #F45B61;
  }

  .input-error {
    height: 1.4rem;

    min-width: 10rem;
  }
</style>
