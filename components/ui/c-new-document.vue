<template>
  <div class="document-loader">
    <c-file-loader
      @change="handlerChange"
      :types="['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']"
      :max-size="10000000"
    />
    <div class="form__notice">
      <c-form-notice
        v-for="(message, index) in errors"
        :key="index"
        :text="message"
      />
    </div>
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
  import CFormNotice from "./c-form-notice"

  export default {
    name: "c-new-document",
    components: {CFormNotice, CFileLoader, CButton},
    data() {
      return {
        value: undefined,
        errors: []
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
      ...mapGetters('users', ['GET_ROWS_COLORS']),
    },
    methods: {
      ...mapMutations('users', ['SET_ROW_COLOR', 'CREATE_RECORD']),
      handlerChange(value) {
        this.value = value
      },

      closeAndClear() {
        this.cancel()
      },

      async closeAndConfirm() {
        if (!this.value) {
          this.errors.push('Нет файла')
          return
        }

        let response

        try {
          response = await this.$axios.$post('/guests/file',
            { file: this.value },
            {
              headers: {
                Authorization: 'Bearer ' + this.$cookies.get('token')
              }
            }
          )
        } catch(error) {
          console.log('closeAndConfirm', error)
          this.errors.push('Ошибка сервера.')
          return
        }

        console.log(response)

        if (!response || !response.data) {
          this.errors.push('Ошибка сервера.')
          return
        }

        response.data.colors.forEach(row => {
          this.SET_ROW_COLOR({
            data: {
              id: row.id,
              color: row.color,
            },
            table: 'guests'
          })
        })

        response.data.table.forEach(data => {
          const formatedData = [
            data.status,
            data.checkin, data.time,
            data.checkout, data.name,
            data.hotel,
            data.fact, data.category,
            data.food, data.bill,
            data.payNotes, data.contacts,
            data.paid, data.comment,
            data.advanced,
            ['edit_guest', 'remove', 'fill', 'print']
          ]

          this.CREATE_RECORD({
            id: data.id,
            data: formatedData,
            table: 'guests'
          })
        })

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
