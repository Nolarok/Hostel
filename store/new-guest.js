export const state = () => ({
  values: {

  }
})

export const mutations = {
  CHANGE_VALUE(state, {name, value}) {
    state.values[name] = value
    console.log('state', state, name, value)
  },

  CHANGE_VALUES(state, data)  {
    // state.values.name = data[0]
    // state.values.email = data[1]
    // state.values.role = data[2]
  },

  CLEAR(state) {
    let key
    for (key in state) {
      state[key] = ''
    }
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
    result.push(['edit', 'remove', 'fill'])

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
