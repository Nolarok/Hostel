<template>
  <div class="action">
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
          :confirm="() => 0"
        />

        <c-confirm
          v-if="info.type === 'remove'"
          question="Удалить запись?"
          :cancel="scope.controls.close"
          :confirm="DELETE_RECORD"
          :payload="[info.id]"
        />

        <c-color-picker
          v-if="info.type === 'fill'"
          :cancel="scope.controls.close"
          :confirm="FILL_ROW"
          :payload="{id: info.id}"
        />

        <c-new-user
          v-if="info.type === 'create'"
          :cancel="scope.controls.close"
          :confirm="CREATE_RECORD"
          :payload="{id: info.id}"
        />

        <c-new-guest
          v-if="info.type === 'edit'"
          :cancel="scope.controls.close"
          :confirm="() => 0"
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

  import {mapGetters, mapMutations} from "vuex"

  export default {
    name: "c-action",
    components: {CNewGuest, CNewUser, CColorPicker, CConfirm, CDialog, CButton, CSvg, CModal},
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations('users', ['DELETE_RECORD', 'FILL_ROW', 'CREATE_RECORD']),
      getSvgType(type) {
        const matches = {
          block: 'lock',
          edit: 'user_edit',
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
          edit: () => {

            this.openModal()
          },
          create: () => {
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
          edit: 'Редактирование',
          create: 'Новый пользователь',
          fill: 'Заливка',
          remove: 'Удаление',
        }

        return matches[type]
      },

      getOpenFromModal(callback) {
        this.openModal = callback
      },

      openModal() {
      },

      closeModal() {
      }
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
