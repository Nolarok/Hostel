<template>
  <component :is="this.svg.split('_').join('')"
    :style="{
      height: '100%',
      color: '#414671',
      ...prop
    }"
  />
</template>

<script>
  import calendar from '../../assets/img/calendar-alt-regular.svg'
  import checkbox from '../../assets/img/check-square-regular.svg'
  import cloud from '../../assets/img/cloud-upload-alt-solid.svg'
  import copy from '../../assets/img/copy-solid.svg'
  import excel from '../../assets/img/file-excel-solid.svg'
  import lock from '../../assets/img/lock-solid.svg'
  import palette from '../../assets/img/palette-solid.svg'
  import plus from '../../assets/img/plus-circle-solid.svg'
  import ruble from '../../assets/img/ruble-sign-solid.svg'
  import save from '../../assets/img/save-solid.svg'
  import sign_in from '../../assets/img/sign-in-alt-solid.svg'
  import square from '../../assets/img/square-regular.svg'
  import cancel from '../../assets/img/times-circle-solid.svg'
  import trash from '../../assets/img/trash-solid.svg'
  import user_edit from '../../assets/img/user-edit-solid.svg'
  import user_slash from '../../assets/img/user-slash-solid.svg'
  import user from '../../assets/img/user-solid.svg'
  import triangle from '../../assets/img/triangle.svg'
  import note from '../../assets/img/exclamation-solid.svg'
  import admin from '../../assets/img/account-tie.svg'
  import guests from '../../assets/img/account-group.svg'
  import report from '../../assets/img/clipboard-text.svg'

  const svgList = {
    "calendar": calendar,
    "checkbox": checkbox,
    "cloud": cloud,
    "copy": copy,
    "excel": excel,
    "lock": lock,
    "palette": palette,
    "plus": plus,
    "ruble": ruble,
    "save": save,
    "sign_in": sign_in,
    "square": square,
    "cancel": cancel,
    "trash": trash,
    "user_edit": user_edit,
    "user_slash": user_slash,
    "user": user,
    "triangle": triangle,
    "note": note,
    "admin": admin,
    "guests": guests,
    "report": report,
  }

  export default {
    name: "c-svg",

    props: {
      svg: {
        type: String,
        required: true,
        validator: (value) => {
          return !!svgList[value]
        }
      },
      prop: {
        type: Object,
        default: () => {}
      }
    },

    data(){
      return {
        svgList: {}
      }
    },

    created() {
      this.svgList = svgList
      this.$options.components[this.svg.split('_').join('')] = this.svgList[this.svg]
    },

    updated() {

    }
  }
</script>

<style scoped>

</style>
