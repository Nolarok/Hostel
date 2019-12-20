<template>
  <div class="login-page">
    <div class="login">
      <h1 class="login__header">Авторизация</h1>
      <c-form
        :form="'login'"
        :cancel="() => {}"
        :confirm="confirm"
        endpoint="/users/login"
        add-class="login__form"
      >
        <template #default="scope">

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
              placeholder:'Введите e-mail',
            }"

              />
            </template>
          </c-form-input>

          <c-form-input
            :form="scope.controls.form"
            :field="'password'"
            :label="'Пароль'"
          >
            <template #default="scope">
              <c-input
                :action="scope.controls.changeValue"
                :options="{
              default: scope.controls.default,
              placeholder:'Введите пароль',
              type: 'password'
            }"

              />
            </template>
          </c-form-input>
        </template>
      </c-form>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  import CForm from "../components/ui/c-form"
  import CFormInput from "../components/ui/c-form-input"
  import CInput from "../components/ui/c-input"

  export default {
    name: "login",
    components: {CInput, CFormInput, CForm},
    methods: {
      ...mapActions('forms', ['SUBMIT']),
      confirm(data) {
        this.$cookies.set('token', data.token)
        window.location.replace('/');
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/vars";

  .login-page {
    display: flex;
    justify-content: center;

    width: 100%;

    padding-top: 4rem;
  }

  .login {
    width: 60rem;

    border: .1rem solid $color-main;
    border-radius: .5rem;

    &__header {
      display: flex;
      align-items: center;

      height: 6rem;
      width: 100%;

      padding: 0 1.4rem;

      background: $color-main;

      @include border-top-radius(.5rem);

      text-transform: uppercase;
      color: #ffffff;
      font-weight: 700;
      font-size: 2.4rem;

      user-select: none;
    }

    &__form {
      .form-input {
        grid-template-columns: 10rem 38rem;
      }
    }
  }

  .page--mobile {
    .login {
      position: fixed;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      width: 100%;

      background-color: $color-contrast;
      @include border-top-radius(0);

      &__header {
        @include border-top-radius(0);
      }

      &__form {
        .form-input {
          grid-template-columns: 10rem 1fr;
        }
      }
    }
  }
</style>
