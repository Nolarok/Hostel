<template>
  <div class="page">
    <v-app>
      <c-table
        tableName="guests"
        :toolbarActions="['create_guest', 'upload']"
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
  import CForm from "../components/ui/c-form"
  import CFormInput from "../components/ui/c-form-input"
  import CInput from "../components/ui/c-input"
  import CDropbox from "../components/ui/c-dropbox"

  export default {
    name: "page",
    components: {CDropbox, CInput, CFormInput, CForm, CStatus, CDatePicker, CFileLoader, CSvg, CButton, CTable},
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
    box-sizing: border-box;
    padding: 2rem;
  }
</style>
