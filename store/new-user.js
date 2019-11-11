export const state = () => ({
  values: {
    name: '123',
    email: '123',
    role: '123'
  }

})

export const mutations = {
  CHANGE_VALUE(state, payload) {
    const {name, value} = payload

    state.values[name] = value
  },

  CLEAR(state) {
    state.values.name = ''
    state.values.email = ''
    state.values.role = ''
  }
}

export const getters = {
  GET_VALUE: (state) => (name) => {
    return state.values[name]
  },

  GET_ALL_VALUES(state) {
    const result = []

    result.push(state.values['name'])
    result.push(state.values['email'])
    result.push(state.values['role'])
    result.push(['block', 'edit', 'remove', 'fill', 'create'])

    return result
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
