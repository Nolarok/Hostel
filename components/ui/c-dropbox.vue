<template>
  <div class="dropbox">
    <c-dialog
      :title="dialogTitle"
      :externalOpen="openDialog"
      :externalClose="closeDialog"
    >
      <template #default="scope">
        <c-input
          :action="setInputValue"
        />

        <div class="dropbox__actions">
          <c-button
            :action="() => {handlerChange(); closeModal()}"
          >Применить
          </c-button>
          <c-button
            :action="scope.controls.close"
          >Отмена
          </c-button>
        </div>

      </template>
    </c-dialog>

    <c-drop
      v-if="getItemsNumber"
      icon="triangle"
      :placeholder="placeholder"
    >
      <template #default="scope">
        <ul class="dropbox__list">
          <li
            class="dropbox__item"
            v-for="(item, index) in values"
            :key="index"
          >
            {{item}}
            <c-button
              type="svg"
              :action="() => {deleteValue(item)}"
              :prop="{
                height: '1.7rem'
              }"
            >
              <c-svg svg="trash"
              />
            </c-button>
          </li>
        </ul>
      </template>
    </c-drop>

    <c-button
      type="svg"
      :action="openModal"
    >
      <c-svg svg="plus"/>
    </c-button>

  </div>
</template>

<script>
  import CDrop from "./c-drop"
  import CButton from "./c-button"
  import CSvg from "./c-svg"
  import CDialog from "./c-dialog"
  import CInput from "./c-input"

  export default {
    name: "c-dropbox",
    components: {CInput, CDialog, CSvg, CButton, CDrop},
    props: {
      default: {
        type: Array,
        default: () => []
      },
      dialogTitle: {
        type: String,
        default: ''
      },
      action: {
        type: Function,
        default: () => 0
      }
    },

    data() {
      return {
        values: [...this.default],
        openModal: () => 0,
        closeModal: () => 0,
        inputValue: ''
      }
    },

    computed: {
      getItemsNumber() {
        return this.values.length
      },

      placeholder() {
        const {length} = this.values

        function getEnding(value) {
          switch (+value.toString().slice(-1)) {
            case 1: return 'сь'
            case 2:
            case 3:
            case 4: return 'си'
            default: return 'сей'
          }
        }

        return length === 1
          ? this.values[0]
          : `${length} запи${getEnding(length)}`
      }
    },

    methods: {
      openDialog(callback) {
        this.openModal = callback
      },

      closeDialog(callback) {
        this.closeModal = callback
      },

      deleteValue(value) {
        this.values = this.values.filter(item => item !== value)
        this.action(this.values)
      },

      setInputValue(value) {
        this.inputValue = value.trim()
      },

      handlerChange() {
        if (this.inputValue) {
          this.values = [...this.values, this.inputValue]
          this.action(this.values)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";
  .v-application ul {
    padding: 0;
  }

  .dropbox {
    display: flex;

    justify-content: center;
    align-items: center;

    .button.svg {
      margin: 0 1rem;
      height: auto;
      width: auto;
    }

    .dropmenu {
      width: 100%;
    }

    .dialog__wrapper {
      padding: 1rem 1rem 0 1rem;
    }

    &__actions {
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

    &__list {
      box-sizing: border-box;
      flex-direction: column;


      margin: 0;
      padding: 0;
      background: $color-contrast;

      border: .1rem solid $color-main;

      border-radius: .5rem;

      overflow: hidden;

      list-style: none;
      user-select: none;
    }

    &__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 4.2rem;

      padding: 0 .8rem;

      font-size: 1.3rem;

      border-top: .1rem solid $color-gray-1;

      &:first-child {
        border-top: none;
      }

      &:hover {
        background: $color-gray-2;
      }
    }
  }
</style>
