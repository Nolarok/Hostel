import axios from 'axios'

export default function ({route, redirect, app}) {

  axios.post(app.$axios.defaults.baseURL + '/users/check', {}, {
    headers: {
      Authorization: 'Bearer ' + app.$cookies.get('token')
    }
  })
    .then(data => {
      if (!data.data.success) {
        app.$cookies.remove('token')
        redirect('/login')
      }
    })
    .catch(error => {
      console.error('middleware', error)
      redirect('/login')
    })

  return 0
}
