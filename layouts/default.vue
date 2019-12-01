<template>
  <div class="main-container">
    <header class="main-header">
      <div class="user">
        <div class="user__avatar-container">
<!--          <img src="" alt="avatar" class="user__avatar">-->
        </div>
        <div class="user__name">Иванов А.А.</div>
<!--        <img class="user__logout" src="~assets/img/user-edit-solid.svg" alt="sign_out">-->
        <c-svg svg="sign_in"
          :prop="{
            height: '2.4rem',
            color: '#ffffff'
          }"
        />
      </div>
    </header>
    <aside class="main-aside">
      <nav class="main-nav">
        <h2 class="main-nav__header">Меню</h2>
        <div class="main-nav__hamburger">
          <div class="main-nav__hamburger-line"></div>
          <div class="main-nav__hamburger-line"></div>
          <div class="main-nav__hamburger-line"></div>
        </div>
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item">
            <nuxt-link to="/">Администрирование</nuxt-link>
          </li>
          <li class="main-nav__item">
            <nuxt-link to="/page">Заселение</nuxt-link>
          </li>
        </ul>
      </nav>
    </aside>
      <v-app><nuxt/></v-app>
    <footer class="main-footer">
      <div class="copyright">
        <span class="copyright__company">COMPANY NAME ©</span>
        <span class="copyright__date">2019</span>
      </div>
    </footer>

  </div>
</template>

<script>
  import CSvg from "../components/ui/c-svg"
  // import VApp from "vuetify/src/components/VApp/VApp"
  export default {
    components: {CSvg}
  }
</script>

<style lang="scss">

</style>
