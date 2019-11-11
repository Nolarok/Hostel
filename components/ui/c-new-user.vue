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
          default: GET_VALUE('name')
        }"
        @input="handlerInputName"
      />

      <label class="new-user__label" for="user-mail">E-mail:</label>
      <c-input
        :options="{
          id: 'user-mail',
          name: 'user-mail',
          type: 'text',
          placeholder: 'Введите адрес почты',
          default: GET_VALUE('email')
        }"
        @input="handlerInputEmail"
      />

      <label class="new-user__label">Роль:</label>
      <c-dropdown
        :data="['Администратор', 'Пользователь']"
        @change="handlerChangeRole"
      />
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

  export default {
    name: "c-new-user",
    components: {CButton, CDropdown, CInput},
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
      }
    },
    computed: {
      ...mapGetters('new-user', ['GET_VALUE', 'GET_ALL_VALUES']),
    },
    methods: {
      ...mapMutations('new-user', ['CHANGE_VALUE', 'CLEAR']),
      handlerInputName(value) {
        this.CHANGE_VALUE({name: 'name', value})
      },

      handlerInputEmail(value) {
        this.CHANGE_VALUE({name: 'email', value})
      },

      handlerChangeRole(value) {
        console.log('dfvfdgdgd')
        this.CHANGE_VALUE({name: 'role', value})
      },

      closeAndClear() {
        this.cancel()
        this.CLEAR()
      },

      closeAndConfirm() {
        this.confirm(this.GET_ALL_VALUES)
        this.CLEAR()
        this.cancel()
      }
    }
  }
</script>

<style lang="scss">
  .new-user {
    padding: 2rem;

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
