<template>
  <c-form
    :form="'user'"
    :cancel="cancel"
    :confirm="confirm"
    :additional-data="{id: this.default}"
    add-class="users"
    :endpoint="this.default ? '/users/update' : '/users/create'"
  >
    <template #default="scope">
      <c-form-input
        :form="scope.controls.form"
        :field="'name'"
        :label="'Имя'"
      >
        <template #default="scope">
          <c-input
            :action="scope.controls.changeValue"
            :options="{
              default: scope.controls.default,
              placeholder:'Введите имя'
            }"
          />
        </template>
      </c-form-input>

      <c-form-input
        :form="scope.controls.form"
        :field="'email'"
        :label="'Email'"
      >
        <template #default="scope">
          <c-input
            :action="scope.controls.changeValue"
            :options="{
              default: scope.controls.default,
              placeholder:'Введите адрес'
            }"
          />
        </template>
      </c-form-input>

      <c-form-input
        :form="scope.controls.form"
        :field="'role'"
        :label="'Роль'"
      >
        <template #default="scope">
          <c-drop
            @change="scope.controls.changeValue"
            :default="scope.controls.default"
          >
            <template #default="scope">
              <c-menu
                :data="['Администратор', 'Пользователь']"
                :default="{index: 1}"
                :action="scope.controls.setValue"
              />
            </template>
          </c-drop>
        </template>
      </c-form-input>
    </template>
  </c-form>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from 'vuex'

  import CForm from "./c-form"
  import CFormInput from "./c-form-input"
  import CInput from "./c-input"
  import CDrop from "./c-drop"
  import CMenu from "./c-menu"

  export default {
    name: "c-user-form",
    components: {CMenu, CDrop, CInput, CFormInput, CForm},
    props: {
      cancel: {
        type: Function,
        required: true
      },
      default: {
        type: [String, Number],
        default: ''
      }
    },
    computed: {
      ...mapGetters('forms', ['GET_ALL_VALUES']),
      ...mapGetters('users', ['GET_ROW_DATA']),
    },
    methods: {
      ...mapMutations('users', ['CREATE_RECORD', 'EDIT_RECORD']),
      ...mapMutations('forms', ['CHANGE_VALUES', 'CLEAR']),
      ...mapActions('users', ['UPDATE_ROW']),

      confirm(data) {
        const formatedData = [data.active, data.name, data.email, data.role, data.actions]

        if (this.default) {
          this.EDIT_RECORD ({
            data: formatedData,
            id: this.default,
            table: 'users'
          })
        } else {
          this.CREATE_RECORD ({
            data: formatedData,
            id: data.id,
            table: 'users'
          })
        }

      },

    },
    created() {
      if (this.default) {
        const rowData = this.GET_ROW_DATA({id: this.default, table: 'users'})

        this.CHANGE_VALUES({
          form: 'user',
          data: {
            name: rowData[3],
            email: rowData[4],
            role: rowData[5],
          }
        })
      } else {
        this.CLEAR({form: 'user'})
      }
    }
  }
</script>

<style lang="scss">
  .form.users {
    .form-input {
      grid-template-columns: 8rem 1fr;
    }
  }
</style>
