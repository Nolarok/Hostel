<template>
  <div class="document-loader">
    <c-file-loader
      @change="handlerChange"
      :types="['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']"
      :max-size="10000000"
    />
    <div class="color-picker__actions">
      <c-button :action="closeAndConfirm">Применить</c-button>
      <c-button :action="closeAndClear">Отмена</c-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex"
  import CButton from "./c-button"
  import CFileLoader from "./c-file-loader"

  export default {
    name: "c-new-document",
    components: {CFileLoader, CButton},
    data() {
      return {
        value: undefined
      }
    },
    props: {
      cancel: {
        type: Function,
        required: true
      },
      payload: {
        type: Object,
        default: () => {
        }
      },
    },
    computed: {
      // ...mapGetters('new-guest', []),
    },
    methods: {
      // ...mapMutations('new-guest', ['CHANGE_VALUE', 'CLEAR']),
      handlerChange(value) {
        console.log(value)
        this.value = value
      },

      closeAndClear() {
        this.cancel()
      },

      closeAndConfirm() {
        this.$axios.$post('/guests/file',
          {
            file: this.value
          },
          {
            headers: {
              Authorization: 'Bearer ' + this.$cookies.get('token')
            }
          }
        )
        // this.CHANGE_VALUE({name: 'file', value: this.value})
        this.cancel()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .document-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 0 2rem;


    .color-picker__actions {
      align-self: flex-end;
    }
  }
</style>
