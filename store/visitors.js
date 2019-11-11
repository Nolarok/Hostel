import Vue from 'Vue'

export const state = () => ([
    {
      data: {
        'id': '123123',
        'num': '1',
        'status': ['Оплачено', 'Заехал'],
        'checkIn': '10.01.2019',
        'time': '12:12',
        'checkOut': '10.01.2019',
        'fullName': 'Иванов Иван Иванович',
        'fact': 'Дельта КПБ',
        'category': '2М',
        'food': 'Завтрак / 2',
        'bill': '3800р.',
        'paid': '10.01.2019',
        'contact': '+7994575221',
        'payment': '10.01.2019',
        'commentary': 'fooo baaaar baaaz',
        'advanced': 'lorem ipsum ....',
        'actions': ['edit', 'delete', 'fill', 'print'],
        'fill': 'red'
      },
      options: {
        fill: '#ff0000'
      }
    },
    {
      data: {
        'id': '1233211',
        'num': '1',
        'status': ['Оплачено', 'Заехал'],
        'checkIn': '10.01.2019',
        'time': '12:12',
        'checkOut': '10.01.2019',
        'fullName': 'Иванов Иван Иванович',
        'fact': 'Дельта КПБ',
        'category': '2М',
        'food': 'Завтрак / 2',
        'bill': '3800р.',
        'paid': '10.01.2019',
        'contact': '+7994575221',
        'payment': '10.01.2019',
        'commentary': 'fooo baaaar baaaz',
        'advanced': 'lorem ipsum ....',
        'actions': ['edit', 'delete', 'fill', 'print'],
        'fill': 'blue'
      },
      options: {
        fill: '#ff0000'
      }
    },
  ]
)

export const actions = {
  async GET_DATA({commit}, payload) {
    let data
    try {
      data = await this.$axios({
        method: 'get',
        url: 'api/v1/visitors/get',
        params: {
          token: payload.token
        }
      })
    } catch (error) {
      return
    }

    // if (data) {
    //   commit('SET_TABLE', data)
    // }

  },

  async ADD_ROW({commit}, payload) {
    try {
      await this.$axios({
        method: 'insert',
        url: 'api/v1/visitors/add',
        params: {
          token: payload.token,
          id: payload.id,
          data: payload.data
        }
      })
    } catch (error) {
      console.log('error', error)
      // TODO return
    }

    commit('ADD_ROW', index)
  },

  async EDIT_ROW({commit}, payload) {
    try {
      await this.$axios({
        method: 'update',
        url: 'api/v1/visitors/edit',
        params: {
          token: payload.token,
          id: payload.id,
          data: payload.data
        }
      })
    } catch (error) {
      console.log('error', error)
      // TODO return
    }

    commit('EDIT_ROW', index)
  },

  async DELETE_ROW({commit}, payload) {
    try {
      await this.$axios({
        method: 'delete',
        url: 'api/v1/visitors/delete',
        params: {
          token: payload.token,
          id: payload.id
        }
      })
    } catch (error) {
      console.log('error', error)
      // TODO return
    }

    commit('DELETE_ROW', payload)
  },

  async FILL_ROW({commit}, payload) {
    try {
      await this.$axios({
        method: 'update',
        url: 'api/v1/visitors/fill',
        params: {
          token: payload.token,
          id: payload.id,
          color: payload.color,
        }
      })
    } catch (error) {
      console.log('error', error)
      // TODO return
    }

    commit('FILL_ROW', payload)
  }
}

export const mutations = {
  SET_TABLE(state, payload) {
    state = payload.data
  },

  ADD_ROW(state, payload) {
    state.push(payload.data)
  },

  EDIT_ROW(state, payload) {
    let row = state.find(row => row.data.id === payload.id)
    row = {...row, ...payload}
  },

  FILL_ROW(state, payload) {
    let row = state.find(row => row.data.id === payload.id)
    row.data.fill = payload.color
  },

  DELETE_ROW(state, payload) {
    // console.log('state', state.filter(row => row.data.id != payload.id))
    // state = {...state.filter(row => row.data.id != payload.id)}
    console.log(state)
    state = 123123123
    // Vue.set(state, 0, test)

    // console.log('state', state, state.filter(row => row.data.id != payload.id))
    // setTimeout(() => {console.log(this.state)}, 0)


  }
}

export const getters = {
  GET_TABLE_DATA(state) {
    return state.map(row => row.data)
  }
}
