<template>
  <div class="table__toolbar">
    <div class="table__toolbar-button"
      v-for="(action, index) in actions"
      :key="index"
    >
      <c-button
        type="svg"
        :action="matches[action].handlerClick"
        :prop="{...matches[action].style.btn}"
      >
        <c-svg
          :svg="matches[action].icon"
          :prop="{...matches[action].style.svg}"
        />
      </c-button>
    </div>

    <c-dialog
      :title="title"
      :externalOpen="getOpenFromModal"
    >
      <template #default="scope">
        <c-user-form
          v-if="currentDialog === 'create_user'"
          :cancel="scope.controls.close"
        />

        <c-guest-form
          v-if="currentDialog === 'create_guest'"
          :cancel="scope.controls.close"
        />

        <c-new-document
          v-if="currentDialog === 'upload'"
          :cancel="scope.controls.close"
          :confirm="() => 0"
          :payload="{}"
        />
      </template>
    </c-dialog>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex"

  import CButton from "./c-button"
  import CSvg from "./c-svg"
  import CDialog from "./c-dialog"
  import CNewUser from "./c-new-user"
  import CNewDocument from "./c-new-document"
  import CUserForm from "./c-user-form"
  import CGuestForm from "./c-guest-form"

  export default {
    name: "c-table-toolbar",
    components: {CGuestForm, CUserForm, CNewDocument, CNewUser, CDialog, CSvg, CButton},
    props: {
      actions: {
        type: Array,
        required: true,
      },
      tableName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        title: '',
        currentDialog: '',
        matches: {
          'create_user': {
            icon: 'plus',
            style: {
              svg: {color: '#005900'},
              btn: {width: '3rem', height: '3rem'}
            },
            handlerClick: () => {
              this.title = 'Новый пользователь'
              this.currentDialog = 'create_user'
              this.openModal()
            }
          },

          'create_guest': {
            icon: 'plus',
            style: {
              svg: {color: '#005900'},
              btn: {width: '3rem', height: '3rem'}
            },
            handlerClick: () => {
              this.title = 'Новый гость'
              this.currentDialog = 'create_guest'
              this.openModal()
            }
          },

          'upload': {
            icon: 'cloud',
            style: {
              svg: {color: '#1a61ff'},
              btn: {width: '4rem', height: '3rem'}
            },
            handlerClick: () => {
              this.title='Загрузить данные'
              this.currentDialog = 'upload'
              this.openModal()
            }
          }
        }
      }
    },
    computed: {},
    methods: {
      ...mapMutations('users', ['CREATE_RECORD']),

      getOpenFromModal(callback) {
        this.openModal = callback
      },

      openModal() {},
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .table {
    &__toolbar {
      display: flex;
    }

    &__toolbar-button {
      margin: 0 .4rem;
    }
  }

  .page--mobile {
    .table--guests {
      .table__toolbar-button:last-child {
        display: none;
      }
    }
  }

</style>
