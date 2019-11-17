<template>
  <div class="new-guest">
    <div class="new-guest__content">
      <label class="new-guest__label" for="user-name">Факт, бронь счет:</label>
      <c-input
        :options="{
          id: 'guest-fact',
          name: 'guest-fact',
          type: 'text',
          placeholder: 'Введите данные...',
          default: GET_VALUE('name')
        }"
        :validators="[
          validators.validatorLength(6),
          validators.validatorNotEmpty()
        ]"
        @input="handlerInputName"
      />

      <label class="new-guest__label" for="user-mail">Стоимость счет:</label>
      <c-input
        :options="{
          id: 'user-mail',
          name: 'user-mail',
          type: 'text',
          placeholder: 'Введите адрес почты',
          default: GET_VALUE('email')
        }"
        :validators="[
          validators.validatorLength(64)
        ]"
        @input="handlerInputEmail"
      />

<!--      <label class="new-guest__label">Роль:</label>-->
<!--      <c-drop-->
<!--        @change="handlerChangeRole"-->
<!--        :default="GET_VALUE('role')"-->
<!--      >-->
<!--        <template #default="scope">-->
<!--          <c-menu-->
<!--            :data="['Администратор', 'Пользователь']"-->
<!--            :default="{index: 1}"-->
<!--            :action="scope.controls.setValue"-->
<!--          />-->
<!--        </template>-->
<!--      </c-drop>-->
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
    name: "c-new-guest",
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
      ...mapGetters('new-guest', ['GET_VALUE', 'GET_ALL_VALUES']),
    },
    methods: {
      ...mapMutations('new-guest', ['CHANGE_VALUE', 'CLEAR']),
      // handlerInputName(value) {
      //   this.CHANGE_VALUE({name: 'name', value})
      // },
      //
      // handlerInputEmail(value) {
      //   this.CHANGE_VALUE({name: 'email', value})
      // },
      //
      // handlerChangeRole(value) {
      //   this.CHANGE_VALUE({name: 'role', value})
      // },

      closeAndClear() {
        this.cancel()
        this.CLEAR()
      },

      hasError() {

      },

      closeAndConfirm() {
        this.confirm({...this.payload, ...{data: this.GET_ALL_VALUES}})
        this.CLEAR()
        this.cancel()
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .new-guest {
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
