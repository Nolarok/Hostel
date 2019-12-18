export const state = () => ({
  name: '',
  role: 'Гость'
})

export const actions = {

}

export const mutations = {
  SET_CURRENT_USER(state, {name, role}) {
    state.name = name
    state.role = role
  },

  CLEAR(state) {
    state.name = 'Гость'
    state.role = ''
  }
}

export const getters = {
  GET_USER_INFO: (state) => (field) => {
    return state[field]
  }
}
