<template>
  <div class="input-wrapper">
    <input
      v-if="options.type !== 'textarea'"
      v-model="value"
      :class="'input'"
      @input="handlerInput"

      :type="options.type"
      :id="options.id"
      :name="options.name"
      :placeholder="options.placeholder || 'Введите данные'"
    />

    <textarea
      v-else
      v-model="value"
      :class="'textarea'"
      @input="handlerInput"

      :id="options.id"
      :name="options.name"
      :placeholder="options.placeholder || 'Введите данные'"
    ></textarea>
  </div>

</template>

<script>
  export default {
    name: "c-input",
    props: {
      options: {
        type: Object,
        default() {
          return {
            placeholder: 'Введите данные...',
            type: 'text',
            default: ''
          }
        }
      },
      action: {
        type: Function,
        default: () => 0
      }
    },

    data() {
      return {
        value: this.options.default,
      }
    },

    computed: {},

    methods: {
      handlerInput() {
        this.action(this.value)
        this.$emit('input', this.value)
      },

      handlerChange() {
        this.action(this.value)
        this.$emit('input', this.value)
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
