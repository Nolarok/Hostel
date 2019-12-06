<template>
  <div id="guests" class="page">
    <h1 class="page-header">Заселение</h1>
    <c-table
      tableName="guests"
      :toolbarActions="['create_guest', 'upload']"
      endpoint="/guests/"
    />
  </div>
</template>

<script>
  import CTable from "../components/ui/c-table"
  import CButton from "../components/ui/c-button"
  import CSvg from "../components/ui/c-svg"
  import CFileLoader from "../components/ui/c-file-loader"
  import CDatePicker from "../components/ui/c-date-picker"
  import CForm from "../components/ui/c-form"
  import CFormInput from "../components/ui/c-form-input"
  import CInput from "../components/ui/c-input"
  import CDropbox from "../components/ui/c-dropbox"
  import CStatusSelect from "../components/ui/c-status-select"

  export default {
    name: "page",
    components: {CStatusSelect, CDropbox, CInput, CFormInput, CForm, CDatePicker, CFileLoader, CSvg, CButton, CTable},
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/vars";

  .page-header {
    font-size: 2.5rem;
    color: $color-main;
    text-transform: uppercase;

    margin-bottom: 2rem;
  }

  .page {
    box-sizing: border-box;
    padding: 2rem;
  }

  .table {
    td:nth-child(3),
    td:nth-child(5),
    td:nth-child(7),
    td:nth-child(8),
    td:nth-child(9),
    td:nth-child(10){
      min-width: 9.5rem;
    }
  }
</style>
