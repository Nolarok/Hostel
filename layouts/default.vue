<template>
  <div :class="{
    'main-container': true,
    'page--mobile': isMobile
    }"
  >
    <c-header/>
    <c-aside/>
    <v-app>
      <nuxt/>
    </v-app>
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
  import CAside from "../components/ui/c-aside"
  import CHeader from "../components/ui/c-header"

  export default {
    components: {CHeader, CAside, CSvg},
    data() {
      return {
        isMobile: false
      }
    },
    methods: {
      handlerResize() {
        this.isMobile = window.innerWidth <= 600
        console.log(this.isMobile)
      }
    },
    mounted() {
      this.isMobile = window.innerWidth <= 600
      window.addEventListener('resize', this.handlerResize)
    },

    destroyed() {
      window.removeEventListener('resize', this.handlerResize)
    }
  }
</script>

<style lang="scss">
  .main-container {
    display: grid;

    grid-template-areas:
      "aside header"
      "aside main"
      "footer footer";

    grid-template-rows: 10rem 1fr 3rem;
    grid-template-columns: auto 1fr;

    height: 100vh;
  }

  .page--mobile.main-container {
    display: grid;

    grid-template-areas:
      "header header"
      "aside aside"
      "main main"
      "footer footer";

    grid-template-rows: 6rem 6rem 1fr 3rem;
    grid-template-columns: auto 1fr;

    height: 100vh;
  }
</style>
