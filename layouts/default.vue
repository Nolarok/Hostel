<template>
  <div class="main-container">
    <header class="main-header">
      <div class="user">
        <div class="user__avatar-container">
          <img src="" alt="avatar" class="user__avatar">
        </div>
        <div class="user__name">Иванов А.А.</div>
        <img class="user__logout" src="~assets/img/sign-in-alt-solid.svg" alt="sign_out">
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
          <li class="main-nav__item main-nav__item--active">
            <a href="#" class="main-nav__link">Администрирование</a>
          </li>
          <li class="main-nav__item">
            <a href="#" class="main-nav__link">Отчеты</a>
          </li>
          <li class="main-nav__item">
            <a href="#" class="main-nav__link">Управдение данными</a>
          </li>
        </ul>
      </nav>
    </aside>
    <nuxt />
    <footer class="main-footer">
      <div class="copyright">
        <span class="copyright__company">COMPANY NAME ©</span>
        <span class="copyright__date">2019</span>
      </div>
    </footer>
  </div>
</template>

<style>
/*html {*/
/*  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',*/
/*    Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  font-size: 16px;*/
/*  word-spacing: 1px;*/
/*  -ms-text-size-adjust: 100%;*/
/*  -webkit-text-size-adjust: 100%;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  box-sizing: border-box;*/
/*}*/

/**,*/
/**:before,*/
/**:after {*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*}*/

/*.button--green {*/
/*  display: inline-block;*/
/*  border-radius: 4px;*/
/*  border: 1px solid #3b8070;*/
/*  color: #3b8070;*/
/*  text-decoration: none;*/
/*  padding: 10px 30px;*/
/*}*/

/*.button--green:hover {*/
/*  color: #fff;*/
/*  background-color: #3b8070;*/
/*}*/

/*.button--grey {*/
/*  display: inline-block;*/
/*  border-radius: 4px;*/
/*  border: 1px solid #35495e;*/
/*  color: #35495e;*/
/*  text-decoration: none;*/
/*  padding: 10px 30px;*/
/*  margin-left: 15px;*/
/*}*/

/*.button--grey:hover {*/
/*  color: #fff;*/
/*  background-color: #35495e;*/
/*}*/
</style>
