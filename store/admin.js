export const state = () => ({
  table: [],
})

export const actions = {
  async GET_TABLE_DATA({commit}, token) {
    let data
    try {
      throw new Error()
      data = await this.$axios({
        method: 'get',
        url: 'users/get',
        params: {
          token
        }
      })
    } catch (error) {
      data = [
        ['#', 'Ф.И.О', 'Почта', 'Роль'],
        ['1', 'Иванов Иван Иванович', 'ivanov@gmail.com', 'Администратор'],
        ['2', 'Иванов Иван Иванович', 'ivanov@gmail.com', 'Администратор'],
        ['3', 'Иванов Иван Иванович', 'ivanov@gmail.com', 'Администратор']
      ]
    }

    if (!data || !data[0]) {
      throw new Error('Table data is not valid')
    }

    commit('SET_TABLE', data)
  },

  async DELETE_TABLE_ROW({commit}, index, jwt) {
    try {
      await this.$axios({
        method: 'delete',
        url: 'users/delete',
        params: {
          jwt,
          index
        }
      })
    } catch (error) {
      console.log('error', error)
      // TODO return
    }

    commit('DELETE_ROW', index)

  }
}

export const mutations = {
  SET_TABLE(state, value) {
    state.table = value
  },

  DELETE_ROW(state, rowIndex) {
    state.table = state.table.filter((item, index) => {
      return rowIndex !== index
    })
  },

  INSERT_ROW(state, row) {
    if (!state.table[0].length && (row.length !== state.table[0].length)) {
      throw new Error('Newline length not equal to table row length')
    }

    state.table.push(row)
  },

  CHANGE_CELL(state, {row, cell, value}) {
    state.table[row][cell] = value
  }
}

export const getters = {
  GET_ONE_DIMENSION_TABLE_DATA(state) {
    let result = []

    console.log('state', state)

    state.table.forEach((row, index) => {
      if (!index) return
      result = result.concat(row)
    })

    return result
  },

  GET_TABLE_HEADERS(state) {
    console.log('state', state)
    return state.table[0]
  }
}
