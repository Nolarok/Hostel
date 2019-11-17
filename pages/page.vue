<template>
  <div class="page">
    <v-app>
      <c-table
        tableName="users"
        :toolbarActions="['create_user', 'upload']"
      />
    </v-app>
  </div>
</template>

<script>
  import CTable from "../components/ui/c-table"
  import CButton from "../components/ui/c-button"
  import CSvg from "../components/ui/c-svg"
  import CFileLoader from "../components/ui/c-file-loader"
  import CDatePicker from "../components/ui/c-date-picker"
  import CStatus from "../components/ui/c-status"

  export default {
    name: "page",
    components: {CStatus, CDatePicker, CFileLoader, CSvg, CButton, CTable},
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
  .page {
    padding: 1rem;
  }
</style>
