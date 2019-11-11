<template>
  <div>
    <c-table
      store-path="users"
    />
    <c-file-loader
      :types="['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']"
      :max-size="10000000"
    />

    <c-date-picker/>
  </div>
</template>

<script>
  import CTable from "../components/ui/c-table"
  import CButton from "../components/ui/c-button"
  import CSvg from "../components/ui/c-svg"
  import CFileLoader from "../components/ui/c-file-loader"
  import CDatePicker from "../components/ui/c-date-picker"

  export default {
    name: "page",
    components: {CDatePicker, CFileLoader, CSvg, CButton, CTable},
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
