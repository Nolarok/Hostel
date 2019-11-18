<template>
  <div class="notification" v-if="text">
    <c-svg
      svg="note"
      :prop="{
        height: '2rem'
      }"
    />
    <span class="notification__text">{{text}}</span>
  </div>
</template>

<script>
  import CSvg from "./c-svg"
  export default {
    name: "c-form-notice",
    components: {CSvg},
    props: {
      text: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notification {
    display: flex;

    margin: 1rem 1rem 1rem 2rem;

    &__text {
      font-size: 1.4rem;
    }

    svg {
      margin-right: 1rem;
    }
  }
</style>
