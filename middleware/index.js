import axios from 'axios'

export default function ({route, redirect, app}) {
  // axios.post('http://ivankoa.loldev.ru/api/v1/users/check', {}, {
  axios.post('http://localhost:3111/api/v1/users/check', {}, {
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
