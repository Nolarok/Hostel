<template>
  <div class="table">
    <div class="table__content">
      <GridTableCell
        v-for="(value, index) in GET_TABLE_HEADERS"
        :key=index
        :modificators="modificators[index].concat(['header'])"
        :value="value"
      />
      <GridTableCell
        v-for="(value, index) in GET_ONE_DIMENSION_TABLE_DATA"
        :key=index
        :modificators="modificators[Math.floor(index % 4)]"
        :value="value"
      />

<!--      <div class="table__cell table__cell&#45;&#45;num table__cell&#45;&#45;header">#</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;header">Ф.И.О</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;header">Почта</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;header">Роль</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;header">Действия</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;num">1</div>-->
<!--      <div class="table__cell">Иванов Иван Иванович</div>-->
<!--      <div class="table__cell">ivanov@gmail.com</div>-->
<!--      <div class="table__cell">Администратор</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;actions">-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="table__cell table__cell&#45;&#45;num">2</div>-->
<!--      <div class="table__cell">Иванов Иван Иванович</div>-->
<!--      <div class="table__cell">ivanov@gmail.com</div>-->
<!--      <div class="table__cell">Администратор</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;actions">-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="table__cell table__cell&#45;&#45;num">3</div>-->
<!--      <div class="table__cell">Иванов Иван Иванович</div>-->
<!--      <div class="table__cell">ivanov@gmail.com</div>-->
<!--      <div class="table__cell">Администратор</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;actions">-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="table__cell table__cell&#45;&#45;num">4</div>-->
<!--      <div class="table__cell">Иванов Иван Иванович</div>-->
<!--      <div class="table__cell">ivanov@gmail.com</div>-->
<!--      <div class="table__cell">Администратор</div>-->
<!--      <div class="table__cell table__cell&#45;&#45;actions">-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--        <div class="action-button">-->
<!--          <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="table__manage">
      <div class="action-button">
        <img src="~assets/img/plus-circle-solid.svg" alt="user" class="action-button__icon">
      </div>
    </div>
    <ul class="table__pagination">
      <li class="table__pagination-left"></li>
      <li class="table__pagination-button">1</li>
      <li class="table__pagination-button">2</li>
      <li class="table__pagination-button">3</li>
      <li class="table__pagination-right"></li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import GridTableCell from "./GridTableCell"

  export default {
    name: "GridTable",
    components: {GridTableCell},
    props: {
      modificators: Array
    },
    data() {
      return {
      }
    },

    methods: {
      ...mapMutations('admin', ['DELETE_ROW', 'INSERT_ROW', 'CHANGE_CELL']),
      ...mapActions('admin', ['GET_TABLE_DATA', 'DELETE_TABLE_ROW']),
    },

    computed: {
      ...mapState('admin', ['table']),
      ...mapGetters('admin', ['GET_ONE_DIMENSION_TABLE_DATA', 'GET_TABLE_HEADERS']),
    },

    async mounted() {
      await this.GET_TABLE_DATA()
    }
  }
</script>

<style scoped>

</style>
