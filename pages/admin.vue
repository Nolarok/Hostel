<template>
  <div class="main-content">
    <div class="control-panel">
      <div class="control-panel__title">Пользователи:</div>
      <div class="control-panel__controls">
        <div role="checkbox" class="checkbox checkbox">
          <div class="checkbox__title">показывать архивированных</div>
          <img src="~assets/img/square-regular.svg" alt="checkbox" class="checkbox__value">
          <img src="~assets/img/check-square-regular.svg" alt="checkbox" class="checkbox__value">
        </div>
        <div role="listbox" class="dropdown dropdown">
          <div class="dropdown__title">записей на странице</div>
          <div class="dropdown__active-item">5</div>
          <ul class="dropdown__list">
            <li class="dropdown__item">5</li>
            <li class="dropdown__item">10</li>
            <li class="dropdown__item">25</li>
          </ul>
        </div>
        <div role="listbox" class="datepicker hidden">показывать архивированных</div>
      </div>
    </div>
    <GridTable :modificators="modificators" :rowActions="rowActions"/>
  </div>
</template>

<script>
  import GridTable from "../components/table/GridTable"
  export default {
    name: "admin",
    components: {GridTable},
    data() {
      return {
        modificators: [
          ['num', 'test'],
          [],
          [],
          [],
          ['actions']
        ],
        rowActions: ['edit', 'remove']
      }
    }
  }
</script>

<style scoped>

</style>
