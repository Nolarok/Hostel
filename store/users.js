import Vue from 'Vue'

export const state = () => ({
  headers: ['id', '#', 'Ф.И.О', 'Роль', 'Действия'],

  table: [
    [654354, 1, 'Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [654356, 2, 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [123411, 3, 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [654322, 4, 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [234422, 5, 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
  ],

  _tableMod: [
    [654354, 1, 'Иванов Иван', 'mail@mail.ru', 'Администратор', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [654356, 2, 'Иванов Петр', 'sdsf4dfg@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [123411, 3, 'Петров Петр', '2535dfdv@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [654322, 4, 'Васильев Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
    [234422, 5, 'asd Петр', 'avfda224@mail.ru', 'Пользователь', ['block', 'edit', 'remove', 'fill', 'create'] ],
  ],

  options: {
    cols: {
      types: ['auto', 'auto', 'auto', 'auto', 'auto', 'actions'],
      sortable: [false, true, true, true, true, false],
      filterable: [false, true, true, true, true, false],
      hidden: [0]
    },

    rows: {
      colors: {
        654354: '#ffffff',
        654356: '#ffffff',
        123411: '#ffffff',
        654322: '#ffffff',
        234422: '#ffffff',
      }
    },

    table: {
      rowsPerPage: 2,
      offset: 2,
    }
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
    state.table = value
    state._tableMod = value
  },

  CHANGE_OFFSET(state, value) {
    state.options.table.offset = value - 1
  },

  CHANGE_ROWS_PER_PAGE(state, value) {
    console.log(state.options, value)
    state.options.table.rowsPerPage = value
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
  },

  DELETE_RECORD(state, id) {
    // state.table = state.table.filter(row => row[0] !== id)
    // state._tableMod = state.table.filter(row => row[0] !== id)

    Vue.set(state, 'table', state.table.filter(row => row[0] !== id))
    Vue.set(state, '_tableMod', state.table.filter(row => row[0] !== id))

    let {offset} = state.options.table
    const paginationLength = Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)

    if (offset === paginationLength) {
      console.log(state.options.table.offset)
      state.options.table.offset--
    }
  },

  CREATE_RECORD(state, payload) {
    const id = Math.round(Math.random() * 10000000)
    let result = [id, state.table.length + 1]

    result = [...result, ...payload]

    Vue.set(state.options.rows.colors, id, '#ffffff')
    // Vue.set(state.table, state.table.length, result)
    // Vue.set(state._tableMod, state._tableMod.length, result)

    state.table.push(result)
    state._tableMod.push(result)

    // state.options.rows.colors[id] = '#ffffff'

    console.log(state)

  },

  FILL_ROW(state, payload) {
    Vue.set(state.options.rows.colors, payload.id, payload.color)
    // state.options.rows.colors[payload.id] = payload.color
  }
}

export const getters = {
  GET_DATA(state) {
    return state.table
  },

  GET_TABLE_HEIGHT(state) {
    if (state.table.length === 0) return 0

    const {rowsPerPage, offset} = state.options.table
    const {_tableMod} = state
    const paginationLength = Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)

    if (_tableMod.length < rowsPerPage) {
      console.log('------', _tableMod.length)
      return _tableMod.length
    }

    return (offset + 1) === paginationLength
      ? _tableMod.length - rowsPerPage * offset
      : rowsPerPage
  },

  GET_ROW_INFO: (state) => (position) => {
    const {offset, rowsPerPage} = state.options.table

    const start = offset * rowsPerPage
    const end = start + rowsPerPage
    const paginationLength = Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)


    console.log({position, offset, rowsPerPage, result: position + offset * paginationLength})

    const id = state._tableMod[position + offset * paginationLength][0]
    console.log('COLOR', state.options.rows.colors[id])

    return {
      position,
      id,
      data: state._tableMod.slice(start, end)[position],
      options: {
        color: state.options.rows.colors[id] || '#ffffff'
      }
    }
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
    console.log('GET_PAGINATION_LENGTH', Math.ceil(state._tableMod.length / state.options.table.rowsPerPage))
    return Math.ceil(state._tableMod.length / state.options.table.rowsPerPage)
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

  if(!parsedDate) return null

  return `${parsedDate[1]}/${parsedDate[0]}/${parsedDate[2]}`

}
