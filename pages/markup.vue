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
    <div class="table">
      <div class="table__content">
        <div class="table__cell table__cell--num table__cell--header">#</div>
        <div class="table__cell table__cell--header">Ф.И.О</div>
        <div class="table__cell table__cell--header">Почта</div>
        <div class="table__cell table__cell--header">Роль</div>
        <div class="table__cell table__cell--header">Действия</div>
        <div class="table__cell table__cell--num">1</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">2</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">3</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">4</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
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

    <div class="table table--large">
      <div class="table__nums">
        <div class="table__cell table__cell--header">#</div>
        <div class="table__cell">1</div>
        <div class="table__cell">2</div>
        <div class="table__cell">3</div>
        <div class="table__cell">4</div>
      </div>
      <div class="table__actions">
        <div class="table__cell table__cell--actions table__cell--header">Действия</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
      </div>
      <div class="table__content">
        <div class="table__cell table__cell--num table__cell--header">#</div>
        <div class="table__cell table__cell--header">Ф.И.О</div>
        <div class="table__cell table__cell--header">Почта</div>
        <div class="table__cell table__cell--last table__cell--header">Роль</div>
        <div class="table__cell table__cell--actions table__cell--header">Действия</div>
        <div class="table__cell table__cell--num">1</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell table__cell--last">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">2</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell table__cell--last">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">3</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell table__cell--last">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
        <div class="table__cell table__cell--num">4</div>
        <div class="table__cell">Иванов Иван Иванович</div>
        <div class="table__cell">ivanov@gmail.com</div>
        <div class="table__cell table__cell--last">Администратор</div>
        <div class="table__cell table__cell--actions">
          <div class="action-button">
            <img src="~assets/img/lock-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/user-edit-solid.svg" alt="user" class="action-button__icon">
          </div>
          <div class="action-button">
            <img src="~assets/img/trash-solid.svg" alt="user" class="action-button__icon">
          </div>
        </div>
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


  </div>
</template>

<script>
  export default {
    name: "markup"
  }
</script>

<style scoped>

</style>
