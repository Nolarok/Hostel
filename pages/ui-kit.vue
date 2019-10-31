<template>
  <div>
    <CustomButton
      :action="handlerButtonClick"
      :style="{width: '20rem', height: '5.4rem'}"
    >
      <svgCalendar/>
      Button
    </CustomButton>
  </div>
</template>

<script>
  import CustomButton from "../components/ui/CustomButton"
  import svgCalendar from "../assets/img/calendar-alt-regular.svg"

  export default {
    name: "ui-kit",
    components: {CustomButton},
    methods: {
      handlerButtonClick() {
        alert('Button click')
      }
    }
  }
</script>

<style scoped>

</style>
