import axios from 'axios'

export default function ({ route, redirect, app }) {
  axios.post('http://127.0.0.1:3111/api/v1/users/check', {}, {
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
