import Vue from 'Vue'

export const state = () => ({
  users: {
    headers: ['#', 'Статус УЗ', 'Ф.И.О', 'Email', 'Роль', 'Действия'],

    table: [
      [654354, 1, 'Заблокирована', 'Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit_user', 'remove']],
      [654356, 2, 'Активна', 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [123411, 3, 'Активна', 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [654322, 4, 'Активна', 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [234422, 6, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [123322, 5, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
    ],

    _tableMod: [
      [654354, 1, 'Заблокирована','Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit_user', 'remove']],
      [654356, 2, 'Активна','Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [123411, 3, 'Активна','Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [654322, 4, 'Активна','Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [234422, 5, 'Активна','asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      [123322, 6, 'Активна','asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
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
  },

  guests: {
    headers: [
      '#',
      'Статус',
      'Дата заезда',
      'Время',
      'Дата выезда',
      'Ф.И.О',
      'Факт бронь, фирма, счет',
      'Категория по запросу',
      'Питание',
      '№Счета / нал, цена',
      'Отметки об оплате',
      'Контакты',
      'Оплата',
      'Комментарий гостя',
      'Дополнительно',
      'Действия'
    ],

    table: [
      [123123, 1, ['not_payed', 'payed', 'check_in', 'not_check_in'], '2019/10/10', '10:00', '2019/11/11', ['Петя', 'Вася'], 'Дельта КПБ', '2М', 'Завтрак 1', '3600р.', 'Оплачено 16.07', ['+7999999999', 'mail@mail.ru'], 'foo bar', 'comment', 'additional', ['edit', 'remove', 'fill']],
    ],

    _tableMod: [
      [123123, 1, ['not_payed', 'payed', 'check_in', 'not_check_in'], '2019/10/10', '10:00', '2019/11/11', ['Петя', 'Вася'], 'Дельта КПБ', '2М', 'Завтрак 1', '3600р.', 'Оплачено 16.07', ['+7999999999', 'mail@mail.ru'], 'foo bar', 'comment', 'additional', ['edit', 'remove', 'fill']],
    ],

    options: {
      cols: {
                    //    '#'     'С',    'ДЗ',   'Вр',   'ДВ',   'ФИО', 'ФБФ',  'КЗ',    'П',    '№',   'ОО',   'К',   'О',    'КГ',   'Д',   'Действия'
        types: ['auto', 'auto', 'status', 'date', 'auto', 'date', 'set', 'auto', 'auto', 'auto', 'auto', 'auto', 'set', 'auto', 'auto', 'auto', 'actions'],
        sortable: [false, true, true,      true,  true,    true,  true,  true,   true,   true,    true,  true,   true,   true,   true,  true, false],
        filterable: [false, true,true,     true,  true,    true,  true,  true,   true,   true,    true,  true,   true,   true,   true,  true, false],
        hidden: [0]
      },

      rows: {
        colors: [
          {id: 123123, color: '#ffffff'},
        ]
      },

      table: {
        rowsPerPage: 10,
        offset: 0,
      }
    },
  }
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
    // state.table = value
    // state._tableMod = value
  },

  CHANGE_OFFSET(state, {value, table}) {
    state[table].options.table.offset = value - 1
  },

  CHANGE_ROWS_PER_PAGE(state, {value, table}) {
    console.log('CHANGE_ROWS_PER_PAGE', value, table)
    state[table].options.table.rowsPerPage = value

    const paginationLength = Math.ceil(state[table]._tableMod.length / state[table].options.table.rowsPerPage)

    if (state[table].options.table.offset + 1 >= paginationLength) {
      state[table].options.table.offset = paginationLength - 1
    }
  },

  FILTER_BY_COL(state, {value, table}) {
    const filters = {
      date: (item, searchItem) => {
        return formatDate(new Date(item)) === stringToDate(searchItem)
      },

      set: (item, searchItem) => {
        return item.some(subitem => subitem.includes(searchItem))
      },

      status: (item, searchItem) => {
        return item.includes(searchItem)
      },

      auto: (item, searchItem) => {
        return item.toString().includes(searchItem.trim())
      },
    }

    if ([undefined, ''].includes(value)) {
      state[table]._tableMod = state[table].table
    }

    state[table]._tableMod = state[table].table.filter(row => {
      return row.some((item, index) => {
        if (!state[table].options.cols.filterable[index]) {
          return false
        }

        const type = state[table].options.cols.types[index]

        return filters[type](item, value)
      })
    })

    state[table].options.table.offset = 0
  },

  DELETE_RECORD(state, {id, table}) {
    Vue.set(state[table], 'table', state[table].table.filter(row => row[0] !== id))
    Vue.set(state[table], '_tableMod', state[table].table.filter(row => row[0] !== id))

    let {offset} = state[table].options.table
    const paginationLength = Math.ceil(state[table]._tableMod.length / state[table].options.table.rowsPerPage)

    if (offset === paginationLength) {
      state[table].options.table.offset--
    }
  },

  CREATE_RECORD(state, {data, table}) {
    console.log('CREATE_RECORD', data, table)
    const id = Math.round(Math.random() * 10000000)
    const result = [id, state[table].table.length + 1, ...data]

    Vue.set(state[table].options.rows.colors, state[table].options.rows.colors.length, {id, color: '#ffffff'})
    Vue.set(state[table].table, state[table].table.length, result)
    Vue.set(state[table]._tableMod, state[table]._tableMod.length, result)
  },

  EDIT_RECORD(state, {data, id, table}) {
    console.log('EDIT_RECORD', originTable, _tableMod)
    const {table: originTable, _tableMod} = state[table]


    const rowTableIndex = originTable.findIndex(item => item[0] === id)
    const rowModTableIndex = _tableMod.findIndex(item => item[0] === id)

    Vue.set(originTable, rowTableIndex, [...originTable[rowTableIndex].slice(0, 2), ...data])
    Vue.set(_tableMod, rowModTableIndex, [..._tableMod[rowModTableIndex].slice(0, 2), ...data])
  },

  CHANGE_CELL_VALUE(state, {id, index, value, table}) {
    const tableIndex = state[table].table.findIndex(row => row[0] === id)
    const _tableModIndex = state[table]._tableMod.findIndex(row => row[0] === id)

    Vue.set(state[table].table[tableIndex], index, value)
    Vue.set(state[table]._tableMod[_tableModIndex], index, value)
  },

  FILL_ROW(state, {id, color, table}) {
    console.log('FILL_ROW', id, color, table)
    const index = state[table].options.rows.colors.findIndex(item => item.id === id)

    state[table].options.rows.colors[index].color = color
  }
}

export const getters = {
  GET_DATA: (state)  => ({table}) => {
    return state[table].table[table]
  },

  GET_TABLE_HEIGHT: (state) => ({table}) => {
    if (state[table].table.length === 0 || state[table]._tableMod.length === 0) return 0

    const {rowsPerPage, offset} = state[table].options.table
    const {_tableMod} = state[table]
    const paginationLength = Math.ceil(state[table]._tableMod.length / rowsPerPage)

    if (paginationLength === 1) {
      return _tableMod.length
    }

    if (offset + 1 >= paginationLength) {
      return rowsPerPage - (rowsPerPage * offset + rowsPerPage - _tableMod.length)
    }

    return rowsPerPage
  },

  GET_ROW_INFO: (state) => ({position, table}) => {
    console.log('TABLE', position, table)

    const {offset, rowsPerPage} = state[table].options.table
    const start = offset * rowsPerPage
    const end = start + rowsPerPage

    const id = state[table]._tableMod[
      position + ((offset * rowsPerPage) > state[table]._tableMod.length
        ? state[table]._tableMod.length - 1
        : offset * rowsPerPage
    )][0]

    return {
      position,
      id,
      data: state[table]._tableMod.slice(start, end)[position],
      color: state[table].options.rows.colors[id] || '#ffffff'
    }
  },

  GET_ROW_DATA: (state) => ({id, table}) => {
    return state[table]._tableMod.find(item => item[0] === id)
  },

  GET_ROW_COLOR: (state) => ({id, table}) => {
    const { colors } = state[table].options.rows

    const index = colors.findIndex(item => item.id === id)

    return state[table].options.rows.colors[index].color
  },

  GET_CELL_INFO: (state) => ({position, table}) => {
    const {offset, rowsPerPage} = state[table].options.table

    const start = offset * rowsPerPage
    const end = start + rowsPerPage

    return {
      position,
      id: state[table]._tableMod.slice(start, end)[position.i][0],
      data: state[table]._tableMod.slice(start, end)[position.i][position.j],
      type: state[table].options.cols.types[position.j],
      hidden: state[table].options.cols.hidden.includes(+position.j)
    }
  },

  GET_HEADERS:(state) => ({table}) => {
    return state[table].headers
  },

  GET_OPTIONS: (state) => ({table}) => {
    return state[table].options
  },

  GET_PAGINATION_LENGTH:(state) => ({table}) => {
    return Math.ceil(state[table]._tableMod.length / state[table].options.table.rowsPerPage)
  },

  GET_OFFSET: (state) => ({table}) => {
    return state[table].options.table.offset
  },

  GET_ROWS_PER_PAGE: (state) => ({table}) => {
    console.log('GET_ROWS_PER_PAGE', table)
    return state[table].options.table.rowsPerPage
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
