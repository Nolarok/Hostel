<template>
  <div class="action" id="app">
    <c-button
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
          question="Заблокировать пользователя?"
          :cancel="scope.controls.close"
          :confirm="() => {CHANGE_CELL_VALUE({
            id: info.id,
            index: 2,
            value: 'Заблокирована',
            table: tableName
          })}"
        />

        <c-confirm
          v-if="info.type === 'remove'"
          question="Удалить запись?"
          :cancel="scope.controls.close"
          :confirm="DELETE_RECORD"
          :payload="{id: info.id, table: tableName}"
        />

        <c-color-picker
          v-if="info.type === 'fill'"
          :cancel="scope.controls.close"
          :confirm="FILL_ROW"
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

<!--        <c-new-user-->
<!--          v-if="info.type === 'edit_user'"-->
<!--          :cancel="() => {scope.controls.close(); CLEAR({form: 'user'})}"-->
<!--          :confirm="EDIT_RECORD"-->
<!--          :payload="{id: info.id, table: tableName}"-->
<!--        />-->

        <c-user-form
          v-if="info.type === 'create_user'"
          :cancel="scope.controls.close"
          :default="info.id"
        />
<!--        <c-new-guest-->
<!--          v-if="info.type === 'edit'"-->
<!--          :cancel="scope.controls.close"-->
<!--          :confirm="() => 0"-->
<!--        />-->

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

  import {mapGetters, mapMutations} from "vuex"
  import CUserForm from "./c-user-form"
  import CGuestFrom from "./c-guest-form"

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
      ...mapGetters('users', ['GET_ROW_DATA'])
    },
    methods: {
      ...mapMutations('users', ['DELETE_RECORD', 'FILL_ROW', 'CREATE_RECORD', 'EDIT_RECORD', 'CHANGE_CELL_VALUE']),
      ...mapMutations('new-user', ['CHANGE_VALUES', 'CLEAR']),

      getSvgType(type) {
        const matches = {
          block: 'lock',
          edit_guest: 'user_edit',
          edit_user: 'user_edit',
          create: 'user',
          fill: 'palette',
          remove: 'trash'
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
        }

        return matches[type]
      },

      getTitle(type) {
        const matches = {
          block: 'Заблокировать',
          edit_user: 'Редактирование',
          edit_guest: 'Редактирование',
          create_user: 'Новый пользователь',
          create_guest: 'Заселение',
          fill: 'Заливка',
          remove: 'Удаление',
        }

        return matches[type]
      },

      getOpenFromModal(callback) {
        this.openModal = callback
      },

      openModal() {},
    },

    mounted() {
      // console.log('mounted', this.info, this.tableName)
    }
  }
</script>

<style lang="scss">
  .action {
    > .button {
      margin: 0 .4rem;
    }
  }
</style>
