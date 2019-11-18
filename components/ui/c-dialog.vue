<template>
  <c-modal
    :externalOpen="externalOpen"
    :externalClose="externalClose"
  >
    <template #default="scope">
      <div class="dialog">
        <h3 class="dialog__header">{{title}}</h3>
        <div class="dialog__wrapper">
          <slot :controls="{
            close: scope.controls.close
          }">

          </slot>
        </div>
      </div>
    </template>
  </c-modal>
</template>

<script>
  import CModal from "./с-modal"
  export default {
    name: "c-dialog",
    components: {CModal},
    props: {
      title: {
        type: String,
        default: ''
      },
      externalOpen: {
        type: Function,
        required: true
      },
      externalClose: {
        type: Function,
        default: () => 0
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .dialog {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    /*width: 60rem;*/

    border-radius: .5rem;

    /*background: #ffffff;*/


    /*overflow: hidden;*/

    &__header {
      display: flex;
      align-items: center;

      height: 6rem;
      width: 100%;

      padding: 0 1.4rem;

      background: $color-main;

      @include border-top-radius(.5rem);

      text-transform: uppercase;
      color: #ffffff;
      font-weight: 700;
      font-size: 2.4rem;

      user-select: none;
    }

    &__wrapper {
      /*min-height: 20rem;*/
      width: 100%;

      background: #ffffff;

      @include border-bottom-radius(.5rem);
    }
  }
</style>
