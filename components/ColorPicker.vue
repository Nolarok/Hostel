<template>
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Выберите цвет
    </v-card-title>

    <v-card-text>
      <div class="color-picker">
        <Color
          color="#00ffff"
          :getColor="handlerClick"
        />

        <Color
          color="#0d00ff"
          :getColor="handlerClick"
        />

        <Color
          color="#044fff"
          :getColor="handlerClick"
        />

        <Color
          color="#0d0222"
          :getColor="handlerClick"
        />

        <Color
          color="#00ff1a"
          :getColor="handlerClick"
        />

        <Color
          color="#ff1144"
          :getColor="handlerClick"
        />

      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        text
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
  import Color from "./Color"

  export default {
    name: "ColorPicker",
    components: {Color},
    data() {
      return {
        value: 'none'
      }
    },
    methods: {
      handlerClick(color) {
        this.value = color
      }
    }
  }
</script>

<style scoped>
  .color-picker {
    display: flex;

    align-items: center;
    justify-content: space-between;

    padding-top: 3rem;
  }
</style>
