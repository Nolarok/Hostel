<template>
  <div class="status">
    <v-tooltip bottom>
      <template #activator="data">
        <div class="status-wrapper" v-on="data.on">
        <c-svg
          :svg="match.icon"
          :prop="{height: '2rem', color: match.fill}"
        />
        </div>
      </template>
      <span>{{match.text}}</span>
    </v-tooltip>
  </div>
</template>

<script>
  import CSvg from "./c-svg"

  export default {
    name: "c-status",
    components: {CSvg},
    props: {
      type: String,
      default: ''
    },
    data() {
      return {
        matches: {
          'Заехал': {
            fill: '#000000',
            text: 'Заехал',
            icon: 'user'
          },

          'Не заехал': {
            fill: '#ff0000',
            text: 'Не заехал',
            icon: 'user'
          },

          'Оплачено': {
            fill: '#00aa00',
            text: 'Оплачено',
            icon: 'ruble'
          },

          'Не оплачено': {
            fill: '#ff0000',
            text: 'Не оплачено',
            icon: 'ruble'
          },

        }
      }
    },
    computed: {
      match() {
        return this.matches[this.type]
      }
    }
  }
</script>

<style scoped>
  .status-wrapper {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
  }
</style>
