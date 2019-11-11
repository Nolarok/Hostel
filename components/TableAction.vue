<template>
  <v-dialog
    width="500"
    :dialog="displayColorPicker"
  >
    <template v-slot:activator="{ on }">
      <v-icon
        v-on="on"
        @click="() => {}">

        {{ icon }}
      </v-icon>
    </template>

    <ColorPicker />

  </v-dialog>

</template>

<script>
  import ColorPicker from "./ColorPicker"
  export default {
    name: "TableAction",
    components: {ColorPicker},
    props: ["icon"],
    data() {
      return {
        displayColorPicker: false
      }
    },
    methods: {
      setColor () {
        this.displayColorPicker = false
      }
    }
  }
</script>

<style scoped>

</style>
