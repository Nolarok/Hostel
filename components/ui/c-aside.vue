<template>
  <transition name="fade" mode="out-in" appear>
    <aside class="main-aside">
    <nav
      :class="{
        'main-nav': true,
        'main-nav--min': isMin
      }"
    >
      <h2 v-if="!isMin" class="main-nav__header">Меню</h2>
      <div
        class="main-nav__hamburger"
        @click="resize"
      >
        <div class="main-nav__hamburger-line"></div>
        <div class="main-nav__hamburger-line"></div>
        <div class="main-nav__hamburger-line"></div>
      </div>
      <ul class="main-nav__list">
        <li
          class="main-nav__item main-nav__item"
          v-if="GET_USER_INFO('role') === 'Администратор'"
        >
          <nuxt-link to="/">
            <span v-if="!isMin">Администрирование</span>
            <c-svg
              v-else
              svg="admin"
              :prop="{
                height: '4rem',
              }"
            />
          </nuxt-link>
        </li>

        <li
          class="main-nav__item"
          v-if="GET_USER_INFO('role') !== 'Гость'"
        >
          <nuxt-link to="/page">
            <span v-if="!isMin">Заселение</span>
            <c-svg
              v-else
              svg="guests"
              :prop="{
                height: '4rem',
              }"
            />
          </nuxt-link>
        </li>

        <li
          class="main-nav__item"
          v-if="GET_USER_INFO('role') !== 'Гость'"
        >
          <nuxt-link to="/reports">
            <span v-if="!isMin">Отчеты</span>
            <c-svg
              v-else
              svg="report"
              :prop="{
                height: '4rem',
              }"
            />
          </nuxt-link>
        </li>

      </ul>
    </nav>
  </aside>
  </transition>
</template>

<script>
  import CSvg from "./c-svg"
  import {mapGetters} from 'vuex'
  export default {
    name: "c-aside",
    components: {CSvg},
    data() {
      return {
        isMin: true
      }
    },
    computed: {
      ...mapGetters('user', ['GET_USER_INFO'])
    },
    methods: {
      resize() {
        this.isMin = !this.isMin
        this.$bus.$emit('aside-change', this.isMin)
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .main-nav {
    width: 25rem;

    svg {
      fill: #414671;
    }

    .nuxt-link-exact-active svg {
      fill: #ffffff;
    }

    &--min {
      width: 8rem;
    }
  }

  .page--mobile {
    .main-nav {
      position: sticky;
    }

    .main-nav {
      grid-template-rows: 0 6rem;

      width: 100%;

      &__hamburger {
        display: none;
      }

      &__list {
        display: flex;
        height: 100%;

      }

      &__item {
        box-sizing: border-box;
        height: 100%;
        border-bottom: .1rem solid $color-gray-1;

        &:last-child {
          border-right: 0;
        }

        a {
          display: flex;
          justify-content: center;

          padding: 0;
        }
      }
    }
  }
</style>
