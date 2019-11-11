<template>
  <div class="color-picker">
    <div class="color-picker__palette">
      <div
        v-for="(item, index) in palette"
        :key="index"
        @click="activeItem(index)"
      >
        <c-color
          :color="item.color"
          :active="item.isActive"
          @change="handlerChange"
        />
      </div>
      <div class="color-picker__actions">
        <c-button
          :action="action"
        >Применить
        </c-button>
        <c-button
          :action="cancel"
        >Отмена
        </c-button>
      </div>
    </div>

  </div>
</template>

<script>
  import CColor from "./c-color"
  import CButton from "./c-button"

  export default {
    name: "c-color-picker",
    components: {CButton, CColor},
    props: {
      confirm: {
        type: Function,
        required: true
      },
      cancel: {
        type: Function,
        required: true
      },
      payload: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        value: '#ffffff',
        palette: [
          {color: '#ffffff', isActive: true},
          {color: '#00ffff', isActive: false},
          {color: '#ff00ff', isActive: false},
          {color: '#ffff00', isActive: false},
          {color: '#000000', isActive: false},
          {color: '#0000ff', isActive: false},
          {color: '#00ff00', isActive: false},
          {color: '#ff0000', isActive: false},
        ]
      }
    },
    methods: {
      handlerChange(color) {
        this.value = color
      },

      activeItem(index) {
        this.palette.forEach(item => {
          item.isActive = false
        })

        this.palette[index].isActive = true
      },
      action() {
        this.confirm.call(this, {...this.payload, color: this.value})
        this.cancel()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/vars";

  .color-picker {
    &__palette {
      display: grid;
      grid-template-columns: repeat(4, 6rem);
      grid-auto-rows: minmax(auto, 3rem);
      grid-gap: 1rem;

      align-items: center;
      justify-items: center;

      padding: 1rem;
    }

    &__actions {
      grid-column: 1 / 5;

      display: flex;

      justify-self: end;

      align-items: center;
      justify-content: flex-end;

      height: 6rem;
      width: 100%;

      border-top: .1rem solid $color-gray-1;

      & > .button {
        margin-right: 1rem;
      }

    }

  }
</style>
