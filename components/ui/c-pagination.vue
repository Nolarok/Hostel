<template>
  <ul class="pagination">
    <li
      :class="[
        {'pagination__item--active': index === offset},
        'pagination__item'
      ]"
      v-for="(item, index) in length"
      @click="action(item)"
      :key="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>

  export default {
    name: "c-pagination",

    data() {
      return {
        activeItem: 0
      }
    },

    props: {
      length: {
        type: [Number, String],
        required: true
      },
      offset: {
        type: [Number, String],
        required: true
      },
      action: {
        type: Function,
        default: () => 0
      }
    },

    computed: {
      _length() {
        const result = []
        let i
        for (i = 0; i < this.length; i++) {
          result.push(i + 1)
        }
        return result
      }
    },

    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .pagination {
    display: flex;

    padding: 0;

    list-style: none;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2rem;
      width: 2rem;

      margin: 0 .2rem;

      border-radius: 50%;
      background-color: $color-main;
      color: #ffffff;

      cursor: pointer;

      &--active {
        box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.75);

      }

      &:hover {
        background-color: rgba($color-main, .8);
      }
    }
  }
</style>
