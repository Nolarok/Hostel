<template>
  <div
    class="action"
    id="app"
  >
    <c-button
      v-if="(
        (info.type !== 'remove') ||
        ((info.type === 'remove') && (GET_USER_INFO('role') === 'Администратор'))
      )"
      type="svg"
      :action="getClickHandler(info.type)"
    >
      <c-svg :svg="getSvgType(info.type)"/>
    </c-button>
    <c-dialog
      :title="getTitle(info.type)"
      :externalOpen="getOpenFromModal"
    >
      <template #default="scope">
        <c-confirm
          v-if="info.type === 'block'"
          question="Изменить статус пользователя?"
          :cancel="scope.controls.close"
          :confirm="blockUser"
          :payload="{endpoint: tableName}"
        />

        <c-confirm
          v-if="info.type === 'remove'"
          question="Удалить запись?"
          :cancel="scope.controls.close"
          :confirm="deleteRow"
          :payload="{endpoint: tableName}"
        />

        <c-confirm
          v-if="info.type === 'print'"
          question="Сформировать документ?"
          :cancel="scope.controls.close"
          :confirm="getDoc"
          :payload="{endpoint: tableName}"
        />

        <c-color-picker
          v-if="info.type === 'fill'"
          :cancel="scope.controls.close"
          :confirm="changeColor"
          :payload="{id: info.id, table: tableName}"
        />

        <c-user-form
          v-if="info.type === 'edit_user'"
          :cancel="scope.controls.close"
          :default="info.id"
        />

        <c-guest-from
          v-if="info.type === 'edit_guest'"
          :cancel="scope.controls.close"
          :default="info.id"
        />

        <c-user-form
          v-if="info.type === 'create_user'"
          :cancel="scope.controls.close"
          :default="info.id"
        />

      </template>
    </c-dialog>
  </div>
</template>

<script>
  import CButton from "./c-button"
  import CSvg from "./c-svg"
  import CModal from "./с-modal"
  import CDialog from "./c-dialog"
  import CConfirm from "./c-confirm"
  import CColorPicker from "./c-color-picker"
  import CNewUser from "./c-new-user"
  import CNewGuest from "./c-new-guest"

  import {mapGetters, mapMutations, mapActions} from "vuex"
  import CUserForm from "./c-user-form"
  import CGuestFrom from "./c-guest-form"

  import download from 'downloadjs'

  export default {
    name: "c-action",
    components: {CGuestFrom, CUserForm, CNewGuest, CNewUser, CColorPicker, CConfirm, CDialog, CButton, CSvg, CModal},
    props: {
      info: {
        type: Object,
        required: true
      },
      tableName: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapGetters('users', ['GET_ROW_DATA']),
      ...mapGetters('user', ['GET_USER_INFO'])
    },
    methods: {
      ...mapMutations('users', ['DELETE_RECORD', 'FILL_ROW', 'CREATE_RECORD', 'EDIT_RECORD', 'CHANGE_CELL_VALUE']),
      ...mapActions('users', ['SET_ROW_COLOR']),
      ...mapMutations('new-user', ['CHANGE_VALUES', 'CLEAR']),

      getSvgType(type) {
        const matches = {
          block: 'lock',
          edit_guest: 'user_edit',
          edit_user: 'user_edit',
          create: 'user',
          fill: 'palette',
          remove: 'trash',
          print: 'copy'
        }

        return matches[type]
      },

      getClickHandler(type) {
        const matches = {
          block: () => {
            this.openModal()
          },

          edit_user: () => {
            const data = this.GET_ROW_DATA({id: this.info.id, table: this.tableName}).slice(3)

            const values = {
              name: data[0],
              email: data[1],
              role: data[2]
            }

            this.CHANGE_VALUES({...{data: values}, form: 'user'})
            this.openModal()
          },

          create_user: () => {
            this.CLEAR({form: 'user'})
            this.openModal()
          },

          edit_guest: () => {
            this.openModal()
          },

          fill: () => {
            this.openModal()
          },

          remove: () => {
            this.openModal()
          },

          print: () => {
            this.openModal()
          },
        }

        return matches[type]
      },

      getTitle(type) {
        const matches = {
          block: 'Редактирование',
          edit_user: 'Редактирование',
          edit_guest: 'Редактирование',
          create_user: 'Новый пользователь',
          create_guest: 'Заселение',
          fill: 'Заливка',
          remove: 'Удаление',
          print: 'Загрузка'
        }

        return matches[type]
      },

      getOpenFromModal(callback) {
        this.openModal = callback
      },

      async changeColor({color}) {
        this.SET_ROW_COLOR({
          table: this.tableName,
          id: this.info.id,
          color
        })
      },

      async deleteRow({endpoint}) {
        try {
          const result = await this.$axios.$post(`/${endpoint}/delete`,
            {id: this.info.id}, {
              headers: {
                Authorization: 'Bearer ' + this.$cookies.get('token')
              }
            }
          )
        } catch(error) {
          console.error(error)
          return {error: error.message}
        }

        this.DELETE_RECORD({
          id: this.info.id,
          table: this.tableName
        })

        return true
      },

      async getDoc() {
        const baseUrl = this.$nuxt.$options.$axios.defaults.baseURL
        // window.open(`http://ivankoa.loldev.ru/api/v1/guests/doc?id=${this.info.id}`)

        window.open(baseUrl + `/guests/doc?id=${this.info.id}`)
        // let result
        // try {
        //   result = await this.$axios.$get(`/guests/doc`,
        //     // {id: this.info.id},
        //     {
        //       headers: {
        //         Authorization: 'Bearer ' + this.$cookies.get('token')
        //       }
        //     }
        //   )
        // } catch(error) {
        //   console.error(error)
        //   return {error: error.message}
        // }
        //
        // console.log('result')
        //
        // download(
        //   result,
        //   'gh',
        //   'application/zip'
        // )
        //
        // const blob = new Blob([result], {
        //   // type: 'plain/text'
        //   type: 'application/octet-stream'
        //   // type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        // })
        //
        // const link = document.createElement('a')
        //
        // link.href = window.URL.createObjectURL(blob)
        // link.download = 'output.docx'
        //
        // document.body.appendChild(link)
        //
        // link.click()
        //
        // document.body.removeChild(link)

        return true
      },

      async blockUser({endpoint}) {
        let response
        const rowData = this.GET_ROW_DATA({
          id: this.info.id,
          table: this.tableName
        })
        const newStatus = rowData[2] === 'Активна' ? 'Заблокирована' : 'Активна'

        try {
          response = await this.$axios.$post(`/${endpoint}/block`,
            {id: this.info.id, status: newStatus}, {
              headers: {
                Authorization: 'Bearer ' + this.$cookies.get('token')
              }
            }
          )
        } catch(error) {
          console.error(error)
          return {error: 'Ошибка. Не удалось выполнить запрос.'}
        }

        this.CHANGE_CELL_VALUE({
          id: this.info.id,
          index: 2,
          value: newStatus,
          table: this.tableName
        })

        return {status: true}
      },


      openModal() {},
    },
  }
</script>

<style lang="scss">
  .action {
    > .button {
      margin: 0 .4rem;
    }
  }
</style>
