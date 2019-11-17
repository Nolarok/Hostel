export const state = () => ({
  user: {
    name: 'Вася',
    email: 'vasya@mail.com',
    role: 'Пользователь'
  },

  guests: {

  },
})

export const mutations = {
  CHANGE_VALUE(state, {name, value, form}) {
    state[form][name] = value
  },

  CHANGE_VALUES(state, {data, form})  {
    state[form] = {...state[form], ...data}
  },

  CLEAR(state, {form}) {
    let key
    for (key in state[form]) {
      if (typeof state[form][key] === 'Object') {
        state[form][key] = []
      } else {
        state[form][key] = ''
      }
    }
  }
}

export const getters = {
  GET_VALUE: (state) => ({name, form}) => {
    return state[form][name]
  },

  GET_ALL_VALUES: (state) => ({form}) => {
    console.log('GET_ALL_VALUES', form)

    return state[form]
  },

  HAS_ERRORS: {

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
