<template>
  <div class="main-container">
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
  // import VApp from "vuetify/src/components/VApp/VApp"
  export default {
    components: {CHeader, CAside, CSvg}
  }
</script>

<style lang="scss">

</style>
