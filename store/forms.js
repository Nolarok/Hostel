import Vue from 'Vue'
import {validatorLength} from '../helpers/validators'

export const state = () => ({
  user: {
    fields: {
      name: {
        value: '',
        type: 'string',
        validators: [validatorLength(128)],
        errors: []
      },
      email: {
        value: '',
        type: 'string',
        validators: [],
        errors: []
      },
      role: {
        value: '',
        type: 'string',
        validators: [],
        errors: []
      },
    },

    required: ['name', 'email', 'role'],
    errors: []
  },

  guests: {
    fields: {
      hotel: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      status: {
        value: [],
        type: 'set',
        validators: [],
        errors: [],
      },
      checkin: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      time: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      checkout: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      name: {
        value: [],
        type: 'set',
        validators: [],
        errors: [],
      },
      fact: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      category: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      food: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      bill: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      payNotes: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      contacts: {
        value: [],
        type: 'set',
        validators: [],
        errors: [],
      },
      paid: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      comment: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
      advanced: {
        value: '',
        type: 'string',
        validators: [],
        errors: [],
      },
    },

    required: ['checkin', 'time', 'name', 'food', 'checkout', 'category', 'contacts', 'bill', 'payNotes'],
    errors: []
  },

  login: {
    fields: {
      email: {
        value: '',
        type: 'string',
        validators: [],
        errors: []
      },

      password: {
        value: '',
        type: 'string',
        validators: [],
        errors: []
      },
    },
    required: ['email', 'password'],
    errors: []
  }
})

export const actions = {
  async SUBMIT({state, commit, getters}, {form, endpoint, data}) {
    commit('CLEAR_FORM_ERRORS', {form})

    let key
    for (key in state[form].fields) {
      if (state[form].fields[key].errors.length > 0) {
        commit('ADD_FORM_ERROR', {form, error: 'Проверьте поля на правильность введенных данных'})
        break
      }
    }

    let field
    for (field of state[form].required) {
      if (state[form].fields[field].type === 'string') {
        if (state[form].fields[field].value.length <= 0) {
          commit('ADD_FORM_ERROR', {form, error: 'Заполните все обязательные поля'})
          break
        }
      }

      if (state[form].fields[field].type === 'set') {
        if (state[form].fields[field].value.some(item => item.length <= 0)) {
          commit('ADD_FORM_ERROR', {form, error: 'Заполните все обязательные поля'})
          break
        }
      }
    }

    if (state[form].errors.length > 0) {
      return false
    }

    const result = await this.$axios.$post(endpoint,
      data, {
        headers: {
          Authorization: 'Bearer ' + this.$cookies.get('token')
        }
      }
    )

    if (!result.success) {
      commit('ADD_FORM_ERROR', {form, error: result.data.message})
    }

    return result
  }
}

export const mutations = {
  ADD_FORM_ERROR(state, {form, error}) {
    state[form].errors.push(error)
  },

  CLEAR_FORM_ERRORS(state, {form}) {
    state[form].errors = []
  },

  CHANGE_VALUE(state, {name, value, form}) {
    let {validators} = state[form].fields[name]
    state[form].fields[name].errors = []

    state[form].fields[name].value = value

    let key, result

    if (state[form].fields[name].type === 'string') {
      for (key in validators) {
        result = validators[key](value)

        if (!result.value) {
          state[form].fields[name].errors.push(result.message)
        }
      }
    }
  },

  CHANGE_VALUES(state, {data, form}) {
    let key
    for (key in data) {
      if (state[form].fields[key].type === 'string') {

        state[form].fields[key].value = data[key]

      } else {
        Vue.set(state[form].fields[key], 'value', data[key])
      }
    }
  },

  CLEAR(state, {form}) {
    const {fields} = state[form]

    let key

    for (key in fields) {

      fields[key].value = fields[key].type === 'set' ? [] : ''
      fields[key].errors = []
    }

    state[form].errors = []
  }
}

export const getters = {
  /**
   * @param state
   * @returns {function({name: String, form: String}): String}
   * @constructor
   */
  GET_ERROR: (state) => ({name, form}) => {
    const {errors} = state[form].fields[name]

    return errors[errors.length - 1]
  },

  IS_REQUIRED: (state) => ({name, form}) => {
    return state[form].required.includes(name)
  },

  GET_FORM_ERRORS: (state) => ({form}) => {
    return state[form].errors
  },

  GET_VALUE: (state) => ({name, form}) => {
    if (name === 'status') {
      console.log('GET_VALUE', name, form, state[form].fields[name].value)
    }

    return state[form].fields[name].value
  },

  GET_ALL_VALUES: (state) => ({form}) => {
    const result = {}

    let key

    for (key in state[form].fields) {
      result[key] = state[form].fields[key].value
    }

    console.log('GET_ALL_VALUES', result)

    return result
  },

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
