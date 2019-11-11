<template>
  <div class="new-guest">
    <div class="new-guest__content">
      <c-dialog
        title="Контактные данные"
        :externalOpen="getOpenFromModal"
      >
        <template #default="scope">
          <c-confirm
            question="123"
            :cancel="scope.controls.close"
          />
        </template>
      </c-dialog>
      <c-button
        :action="handlerClick"
      >
        Press
      </c-button>
    </div>
    <div class="new-guest__actions">

    </div>
  </div>
</template>

<script>
  import CButton from "./c-button"
  import CConfirm from "./c-confirm"
  import CDialog from "./c-dialog"
  export default {
    name: "c-new-guest",
    components: {CDialog, CConfirm, CButton},
    methods: {
      getOpenFromModal(callback) {
        this.openModal = callback
      },

      openModal() {},

      handlerClick() {
        this.openModal()
      }
    }
  }
</script>

<style scoped>

</style>
