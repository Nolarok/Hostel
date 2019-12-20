import Vue from 'Vue'
import _ from 'lodash'

export const state = () => ({
  users: {
    headers: ['#', 'Статус УЗ', 'Ф.И.О', 'Email', 'Роль', 'Действия'],

    table: [
      // ['6aa54354', 1, 'Заблокирована', 'Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit_user', 'remove']],
      // ['654356', 2, 'Активна', 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['123411', 3, 'Активна', 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['654322', 4, 'Активна', 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['234422', 6, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['123322', 5, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
    ],

    _tableMod: [
      // ['6aa54354', 1, 'Заблокирована', 'Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit_user', 'remove']],
      // ['654356', 2, 'Активна', 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['123411', 3, 'Активна', 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['654322', 4, 'Активна', 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['234422', 5, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
      // ['123322', 6, 'Активна', 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit_user', 'remove']],
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
          // {id: '6aa54354', color: '#ffffff'},
          // {id: '654356', color: '#ffffff'},
          // {id: '123411', color: '#ffffff'},
          // {id: '654322', color: '#ffffff'},
          // {id: '234422', color: '#ffffff'},
          // {id: '123322', color: '#ffffff'},
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
      '#',                       // 1
      '',                        // 2 alone guest_edit
      'Статус',                  // 2
      'Дата заезда',             // 3  checkin
      'Время',                   // 4  time
      'Дата выезда',             // 5  checkout
      'Ф.И.О',                   // 6  name
      'Гостиница',               // 6.5 hotel
      'Факт бронь, фирма, счет', // 7  fact
      'Категория по запросу',    // 8  category
      'Питание',                 // 9  food
      '№ Счета / нал, цена',     // 10 bill
      'Отметки об оплате',       // 11 payNotes
      'Контакты',                // 12 contacts
      'Оплата',                  // 13 paid
      'Комментарий гостя',       // 14 comment
      'Дополнительно',           // 15 advanced
      'Действия'                 //
    ],

    table: [
      // [123123, 1, ['Заехал'], '2019-11-05', '10:00', '2019-11-11', ['Петя', 'Вася'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999999999', 'mail@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [325235, 1, ['Заехал'], '2019-11-06', '12:00', '2019-11-11', ['Маша', 'Галя'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999943399', 'gmail1@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [235663, 1, ['Заехал'], '2019-11-02', '13:00', '2019-11-12', ['Федя', 'Юра'], 'Дельта КПБ', 'К', 'Завтрак-Ужин', '3600р.', 'Оплачено 16.07', ['+7992339999', 'mail2@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [234626, 1, ['Заехал'], '2019-11-01', '10:00', '2019-11-13', ['Олег', 'Антон'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999999991', 'gmail@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
    ],

    _tableMod: [
      // [123123, 1, ['Заехал'], '2019-11-05', '10:00', '2019-11-11', ['Петя', 'Вася'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999999999', 'mail@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [325235, 1, ['Заехал'], '2019-11-06', '12:00', '2019-11-11', ['Маша', 'Галя'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999943399', 'gmail1@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [235663, 1, ['Заехал'], '2019-11-02', '13:00', '2019-11-12', ['Федя', 'Юра'], 'Дельта КПБ', 'К', 'Завтрак-Ужин', '3600р.', 'Оплачено 16.07', ['+7992339999', 'mail2@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
      // [234626, 1, ['Заехал'], '2019-11-01', '10:00', '2019-11-13', ['Олег', 'Антон'], 'Дельта КПБ', '2М', 'Завтрак', '3600р.', 'Оплачено 16.07', ['+7999999991', 'gmail@mail.ru'], 'test', 'comment', 'additional', ['edit_guest', 'remove', 'fill']],
    ],

    options: {
      cols: {
        //       'id'     '#'    'edit'      'С',     'ДЗ',   'Вр',   'ДВ',  'ФИО', 'Гост'  'ФБФ',   'КЗ',    'П',    '№',   'ОО',   'К',   'О',    'КГ',   'Д',   'Действия'
        types: ['auto', 'auto', 'actions', 'status', 'date', 'auto', 'date', 'set', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'set', 'auto', 'auto', 'auto', 'actions'],
        sortable: [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
        filterable: [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
        hidden: [0]
      },

      rows: {
        colors: [
          {id: 123123, color: '#ffffff'},
          {id: 325235, color: '#ffffff'},
          {id: 235663, color: '#ffffff'},
          {id: 234626, color: '#ffffff'},
        ]
      },

      table: {
        rowsPerPage: 10,
        offset: 0,
      }
    },
  }
})

export const actions = {
  async GET_TABLE_DATA({commit}, {table, endpoint, from ,to}) {
    let data

    try {
      data = await this.$axios.$post(endpoint, {
        from,
        to,
      },{
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('token')
        }
      })
    } catch (error) {
      console.error('GET_TABLE_DATA', error)

      return {
        success: false,
        data: {
          message: 'Ошибка сервера',
          error
        }
      }
    }

    if (!data.data.colors) {
      const colors = data.data.table.map(row => {
        return {
          id: row[0],
          color: row.color || '#ffffff'
        }
      })

      commit('SET_ROWS_COLOR', {table, data: colors})
    } else {
      commit('SET_ROWS_COLOR', {table, data: data.data.colors})
    }

    commit('CHANGE_OFFSET', {value: 1, table})
    commit('SET_TABLE', {data: data.data.table, table})

    return data.data
  },

  async SET_ROW_COLOR({commit}, {table, id, color}) {
    let response

    try {
      response = await this.$axios.$post('/guests/color',
        {
          id,
          color
        },
        {
          headers: {
            Authorization: 'Bearer ' + this.$cookies.get('token')
          }
        })
    } catch (error) {
      console.error('SET_ROW_COLOR', error)

      return {
        success: false,
        data: {
          message: 'Ошибка сервера',
          error
        }
      }
    }

    commit('FILL_ROW', {
      id,
      table,
      color
    })
  },

  async UPDATE_ROW({commit}, {table, id, data, endpoint}) {
    let response

    try {
      response = await this.$axios.$post(endpoint,
        data,
        {
          headers: {
            Authorization: 'Bearer ' + this.$cookies.get('token')
          }
        })
    } catch(error) {
      console.error('UPDATE_ROW', error)
    }

    return '' //TODO real data
  }
}

export const mutations = {
  SET_TABLE(state, {table, data}) {
    state[table].table = data
    state[table]._tableMod = _.cloneDeep(data)
  },

  CHANGE_OFFSET(state, {value, table}) {
    state[table].options.table.offset = value - 1
  },

  CHANGE_ROWS_PER_PAGE(state, {value, table}) {
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

      actions: () => {
        return false
      }
    }

    if ([undefined, ''].includes(value)) {
      state[table]._tableMod = _.cloneDeep(state[table].table)
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

  CREATE_RECORD(state, {data, id, table}) {
    const result = [id, state[table].table.length + 1, ...data]

    Vue.set(state[table].options.rows.colors, state[table].options.rows.colors.length, {id, color: '#ffffff'})
    Vue.set(state[table].table, state[table].table.length, result)
    Vue.set(state[table]._tableMod, state[table]._tableMod.length, result)
  },

  EDIT_RECORD(state, {data, id, table}) {
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
    const index = state[table].options.rows.colors.findIndex(item => item.id === id)

    state[table].options.rows.colors[index].color = color
  },

  SET_ROWS_COLOR(state, {table, data}) {
    state[table].options.rows.colors = data
  },

  SET_ROW_COLOR(state, {table, data}) {
    state[table].options.rows.colors.push(data)
  }
}

export const getters = {
  GET_DATA: (state) => ({table}) => {
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
    const {offset, rowsPerPage} = state[table].options.table
    const start = offset * rowsPerPage
    const end = start + rowsPerPage

    // console.log('GET_ROW_INFO',{
    //   result: position + ((offset * rowsPerPage) > state[table]._tableMod.length
    //     ? state[table]._tableMod.length - 1
    //     : offset * rowsPerPage),
    //
    //   offset,
    //   rowsPerPage,
    //   position,
    //   '_tableMod.length': state[table]._tableMod.length,
    //   'table.length': state[table].table.length
    // })

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
    const {colors} = state[table].options.rows

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

  GET_HEADERS: (state) => ({table}) => {
    return state[table].headers
  },

  GET_OPTIONS: (state) => ({table}) => {
    return state[table].options
  },

  GET_PAGINATION_LENGTH: (state) => ({table}) => {
    return Math.ceil(state[table]._tableMod.length / state[table].options.table.rowsPerPage)
  },

  GET_OFFSET: (state) => ({table}) => {
    return state[table].options.table.offset
  },

  GET_ROWS_PER_PAGE: (state) => ({table}) => {
    return state[table].options.table.rowsPerPage
  },

  GET_ROWS_COLORS: (state) => ({table}) => {
    return state[table].options.rows.colors
  }
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return `${toZero(day)}/${toZero(month + 1)}/${year}`
}

function toZero(num) {
  return num > 9 ? num : '0' + num
}

function stringToDate(date) {
  const regexp = /(\d{2}).(\d{2}).(\d{2,4})/
  const parsedDate = date.match(regexp)

  if (!parsedDate) return null

  // 0 - month, 1 - year, 2 - calendar day
  return `${parsedDate[2]}/${parsedDate[0]}/${parsedDate[1]}`
}
