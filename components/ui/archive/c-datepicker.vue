<template>
  <div class="datepicker">
    <CustomButton
      :action="test"
    >
      Тест
    </CustomButton>
  </div>
</template>

<script>
  import CustomButton from "./CustomButton"
  export default {
    name: "c-datepicker",
    components: {CustomButton},
    methods: {
      test() {
        const DAY = 86400000

        function getDateObject(date) {
          return {
            "year": date.getFullYear(),
            "month": date.getMonth() + 1,
            "day": date.getDate(),
            "weekday": date.getDay()
          }
        }

        function normalizeDay(day) {
          return day ? day : 7
        }

        function getFirstCalendarDay(date) {
          const dateObj = getDateObject(date)
          const firstDateOfMonth = new Date([dateObj.month, 1, dateObj.year].join('.'))

          return new Date(firstDateOfMonth - (normalizeDay(firstDateOfMonth.getDay()) - 1 ) * DAY)
        }

        function getCalendarList(date) {

        }

      }
    }
  }
</script>

<style scoped>

</style>
