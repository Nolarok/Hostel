<template>
  <div class="status-select">
    <c-button
      type="svg"
      :action="() => {selectItem('Не заехал')}"
      :prop="{width: '4rem'}"
    >
      <c-svg
        v-if="isSelected('Не заехал')"
        svg="user"
        :prop="{
          height: '3rem',
          color: 'red'
        }"
      />
      <c-svg
        v-else
        svg="user"
        :prop="{
          height: '3rem'
        }"
      />
    </c-button>

    <c-button
      type="svg"
      :action="() => {selectItem('Не оплачено')}"
      :prop="{width: '4rem'}"
    >
      <c-svg
        v-if="isSelected('Не оплачено')"
        svg="ruble"
        :prop="{
          height: '3rem',
          color: 'red'
        }"
      />
      <c-svg
        v-else
        svg="ruble"
        :prop="{
          height: '3rem',
        }"
      />
    </c-button>

  </div>
</template>

<script>
  import CButton from "./c-button"
  import CSvg from "./c-svg"
  export default {
    name: "c-status-select",
    components: {CSvg, CButton},
    props: {
      default: {
        type: Array,
        default: () => ['Не заехал', 'Не оплачено']
      },
      action: {
        type: Function,
        default: () => {}
      },
    },

    data() {
      return {
        value: [...(this.default.length ? this.default : ['Не заехал', 'Не оплачено'])],
      }
    },

    methods: {
      selectItem(value) {
        if (value === 'Не заехал') {
          this.value[0] = this.value.includes('Не заехал') ? 'Заехал' : 'Не заехал'
          // this.$set(this.value, 0, this.value.includes('Не заехал') ? 'Заехал' : 'Не заехал')
        }

        if (value === 'Не оплачено') {
          this.value[1] = this.value.includes('Не оплачено') ? 'Оплачено' : 'Не оплачено'
          // this.$set(this.value, 1, this.value.includes('Не оплачено') ? 'Оплачено' : 'Не оплачено')
        }

        this.$forceUpdate()

        this.action(this.value)
      },

      isSelected(value) {
        return this.value.includes(value)
      }
    },
    mounted() {
      // console.log('mounted', this.default)
      this.action(this.value)
    }


  }
</script>

<style lang="scss">
  .status-select {
    display: flex;
    justify-content: center;

    width: 20rem;
  }

  .page--mobile {
    .status-select {
      width: auto;
    }
  }
</style>
