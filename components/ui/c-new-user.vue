<template>
  <div class="new-user">
    <div class="new-user__content">
      <label class="new-user__label" for="user-name">Имя пользователя:</label>
      <c-input
        :options="{
          id: 'user-name',
          name: 'user-name',
          type: 'text',
          placeholder: 'Введите имя пользователя',
          default: GET_VALUE({name: 'name', form: 'user'})
        }"
        :validators="[
          validators.validatorLength(6),
          validators.validatorNotEmpty()
        ]"
        @input="handlerInputName"
      />

      <label class="new-user__label" for="user-mail">E-mail:</label>
      <c-input
        :options="{
          id: 'user-mail',
          name: 'user-mail',
          type: 'text',
          placeholder: 'Введите адрес почты',
          default: GET_VALUE({name: 'email', form: 'user'})
        }"
        :validators="[
          validators.validatorLength(64)
        ]"
        @input="handlerInputEmail"
      />

      <label class="new-user__label">Роль:</label>
      <c-drop
        @change="handlerChangeRole"
        :default="GET_VALUE({name: 'role', form: 'user'})"
      >
        <template #default="scope">
          <c-menu
            :data="['Администратор', 'Пользователь']"
            :default="{index: 1}"
            :action="scope.controls.setValue"
          />
        </template>
      </c-drop>
    </div>

    <div class="color-picker__actions">
      <c-button :action="closeAndConfirm">Применить</c-button>
      <c-button :action="closeAndClear">Отмена</c-button>
    </div>
  </div>
</template>

<script>
  import CInput from "./c-input"
  import CDropdown from "./c-dropdown"
  import CButton from "./c-button"
  import {mapGetters, mapMutations} from "vuex"
  import CDrop from "./c-drop"
  import CMenu from "./c-menu"

  import {validatorLength, validatorNotEmpty} from '../../helpers/validators'

  export default {
    name: "c-new-user",
    components: {CMenu, CDrop, CButton, CDropdown, CInput},
    props: {
      confirm: {
        type: Function,
        required: true
      },
      cancel: {
        type: Function,
        required: true
      },
      payload: {
        type: Object,
        default: () => {}
      },
      id: {
        type: [String, Number]
      }
    },
    data() {
      return {
        validators: {
          validatorLength,
          validatorNotEmpty
        }
      }
    },
    computed: {
      ...mapGetters('new-user', ['GET_VALUE', 'GET_ALL_VALUES']),
    },
    methods: {
      ...mapMutations('new-user', ['CHANGE_VALUE', 'CLEAR']),
      handlerInputName(value) {
        this.CHANGE_VALUE({name: 'name', value, form: 'user'})
      },

      handlerInputEmail(value) {
        this.CHANGE_VALUE({name: 'email', value, form: 'user'})
      },

      handlerChangeRole(value) {
        this.CHANGE_VALUE({name: 'role', value, form: 'user'})
      },

      closeAndClear() {
        this.cancel()
        this.CLEAR({form: 'user'})
      },

      hasError() {

      },

      closeAndConfirm() {
        const formData = this.GET_ALL_VALUES({form: 'user'})
        const data = []

        data.push('Активна')
        data.push(formData['name'])
        data.push(formData['email'])
        data.push(formData['role'])
        data.push(['block', 'edit', 'remove'])

        this.confirm({...this.payload, ...{data}})
        this.CLEAR({form: 'user'})
        this.cancel()
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .new-user {
    padding: 2rem;
    padding-bottom: 0;

    &__content {
      display: grid;
      grid-template-columns: 1fr 40rem;
      grid-auto-rows: 5.6rem;
      grid-row-gap: 1rem;
      grid-column-gap: 3rem;
      align-items: end;

      padding-bottom: 2rem;
    }

    &__label {
      align-self: center;
      padding-top: 1rem;

      font-size: 2.4rem;
    }

    .input-wrapper {
      width: 100%;
    }
  }
</style>
