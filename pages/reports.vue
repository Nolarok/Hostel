<template>
  <div class="page">
    <h1 class="page-header">Отчеты</h1>

    <!--    <div class="control-panel">-->
<!--      <div class="control-panel__title">Отчеты:</div>-->
<!--    </div>-->
    <div class="reports">
      <c-report
        label="Отчет по заселению"
        :action="reportGuests"
      />
    </div>
  </div>
</template>

<script>
  import CInput from "../components/ui/c-input"
  import CReport from "../components/ui/c-report"
  export default {
    name: "reports",
    components: {CReport, CInput},
    methods: {
      reportGuests({from, to}) {
        const baseUrl = this.$nuxt.$options.$axios.defaults.baseURL

        window.open(baseUrl + `/guests/reportGuests?from=${from}&to=${to}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reports {
    display: flex;
    flex-direction: column;

    margin-top: 3rem;
  }
</style>
