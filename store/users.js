import Vue from 'Vue'

export const state = () => ({
  tables: {

  },
  headers: ['#', 'Статус УЗ', 'Ф.И.О', 'Email', 'Роль', 'Действия'],

  table: [
    [654354, 1, 'Заблокирована', 'sadasdsaddasdsadasdasasdsadasddsadasdasasddasdasИванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit', 'remove', 'fill']],
    [654356, 2, 'Активна', 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [123411, 3, 'Активна', 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [654322, 4, 'Активна', 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [234422, 6, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [123322, 5, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
  ],

  _tableMod: [
    [654354, 1, 'Заблокирована','sadasdsaddasdsadasdasasdsadasddsadasdasasddasdasИванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit', 'remove', 'fill']],
    [654356, 2, 'Активна','Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [123411, 3, 'Активна','Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [654322, 4, 'Активна','Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [234422, 5, 'Активна','asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
    [123322, 6, 'Активна','asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill']],
  ],

  options: {
    cols: {
      types: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'actions'],
      sortable: [false, true, true, true, true, true, false],
      filterable: [false, true, true, true, true, true, false],
      hidden: [0]
    },

    rows: {
      colors: [
        {id: 654354, color: '#ffffff'},
        {id: 654356, color: '#ffffff'},
        {id: 123411, color: '#ffffff'},
        {id: 654322, color: '#ffffff'},
        {id: 234422, color: '#ffffff'},
        {id: 123322, color: '#ffffff'},
      ]
    },

    table: {
      rowsPerPage: 10,
      offset: 0,
    }
  },
})

//TODO ГЛУБОКОЙ КОПИРОВАНИЕ!!!!!!

export const actions = {
  async GET_TABLE_DATA({commit}) {
    let data
    commit('SET_TABLE', data)
  },
}

export const mutations = {
  SET_TABLE(state, value) {
    state.table = value
    state._tableMod = value
  },

  CHANGE_OFFSET(state, value) {
    state.options.table.offset = value - 1
  },

  CHANGE_ROWS_PER_PAGE(state, value) {
    state.options.table.rowsPerPage = value

    const paginationLength = Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)

    if (state.options.table.offset + 1 >= paginationLength) {
      state.options.table.offset = paginationLength - 1
    }
  },

  FILTER_BY_COL(state, value) {
    const filters = {
      date: (item, searchItem) => {
        return formatDate(new Date(item)) === stringToDate(searchItem)
      },

      auto: (item, searchItem) => {
        return item.toString().includes(searchItem.trim())
      },
    }

    if ([undefined, ''].includes(value)) {
      state._tableMod = state.table
    }

    state._tableMod = state.table.filter(row => {
      return row.some((item, index) => {
        if (!state.options.cols.filterable[index]) {
          return false
        }

        const type = state.options.cols.types[index]

        return filters[type](item, value)
      })
    })

    state.options.table.offset = 0
  },

  DELETE_RECORD(state, id) {
    // state.table = state.table.filter(row => row[0] !== id)
    // state._tableMod = state.table.filter(row => row[0] !== id)

    Vue.set(state, 'table', state.table.filter(row => row[0] !== id))
    Vue.set(state, '_tableMod', state.table.filter(row => row[0] !== id))

    let {offset} = state.options.table
    const paginationLength = Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)

    if (offset === paginationLength) {
      state.options.table.offset--
    }
  },

  CREATE_RECORD(state, {data}) {
    const id = Math.round(Math.random() * 10000000)
    const result = [id, state.table.length + 1, ...data]

    Vue.set(state.options.rows.colors, state.options.rows.colors.length, {id, color: '#ffffff'})
    Vue.set(state.table, state.table.length, result)
    Vue.set(state._tableMod, state._tableMod.length, result)
  },

  EDIT_RECORD(state, {data, id}) {
    const {table, _tableMod} = state

    const rowTableIndex = table.findIndex(item => item[0] === id)
    const rowModTableIndex = _tableMod.findIndex(item => item[0] === id)

    Vue.set(table, rowTableIndex, [...table[rowTableIndex].slice(0, 2), ...data])
    Vue.set(_tableMod, rowModTableIndex, [..._tableMod[rowModTableIndex].slice(0, 2), ...data])
  },

  CHANGE_CELL_VALUE(state, {id, index, value}) {
    const tableIndex = state.table.findIndex(row => row[0] === id)
    const _tableModIndex = state._tableMod.findIndex(row => row[0] === id)

    Vue.set(state.table[tableIndex], index, value)
    Vue.set(state._tableMod[_tableModIndex], index, value)
  },

  FILL_ROW(state, {id, color}) {
    const index = state.options.rows.colors.findIndex(item => item.id === id)

    state.options.rows.colors[index].color = color
  }
}

export const getters = {
  GET_DATA(state) {
    return state.table
  },

  GET_TABLE_HEIGHT(state) {
    if (state.table.length === 0 || state._tableMod.length === 0) return 0

    const {rowsPerPage, offset} = state.options.table
    const {_tableMod} = state
    const paginationLength = Math.ceil(state._tableMod.length / rowsPerPage)

    if (paginationLength === 1) {
      return _tableMod.length
    }

    if (offset + 1 >= paginationLength) {
      return rowsPerPage - (rowsPerPage * offset + rowsPerPage - _tableMod.length)
    }

    return rowsPerPage
  },

  GET_ROW_INFO: (state) => (position) => {
    const {offset, rowsPerPage} = state.options.table
    const start = offset * rowsPerPage
    const end = start + rowsPerPage

    const id = state._tableMod[
      position + ((offset * rowsPerPage) > state._tableMod.length
        ? state._tableMod.length - 1
        : offset * rowsPerPage
    )][0]

    return {
      position,
      id,
      data: state._tableMod.slice(start, end)[position],
      color: state.options.rows.colors[id] || '#ffffff'
    }
  },

  GET_ROW_DATA: (state) => (id) => {
    return state._tableMod.find(item => item[0] === id)
  },

  GET_ROW_COLOR: (state) => (id) => {
    const { colors } = state.options.rows

    const index = colors.findIndex(item => item.id === id)

    return state.options.rows.colors[index].color
  },

  GET_CELL_INFO: (state) => (position) => {
    const {offset, rowsPerPage} = state.options.table

    const start = offset * rowsPerPage
    const end = start + rowsPerPage

    return {
      position,
      id: state._tableMod.slice(start, end)[position.i][0],
      data: state._tableMod.slice(start, end)[position.i][position.j],
      type: state.options.cols.types[position.j],
      hidden: state.options.cols.hidden.includes(+position.j)
    }
  },

  GET_HEADERS(state) {
    return state.headers
  },

  GET_OPTIONS(state) {
    return state.options
  },

  GET_PAGINATION_LENGTH(state) {
    return Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)
  },

  GET_OFFSET(state) {
    return state.options.table.offset
  },

  GET_ROWS_PER_PAGE(state) {
    return state.options.table.rowsPerPage
  }
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  return `${year}/${month}/${day}`
}

function stringToDate(date) {
  const regexp = /(\d{2}).(\d{2}).(\d{2,4})/
  const parsedDate = date.match(regexp)

  if (!parsedDate) return null

  return `${parsedDate[1]}/${parsedDate[0]}/${parsedDate[2]}`

}
