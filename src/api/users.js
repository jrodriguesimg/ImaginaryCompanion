import HttpClient from './utils/http-client'

export const getUserInfo= (id) => {
  return HttpClient().request({
    method: 'post',
    url: '/users.info',
    params: {
      user: id,
      pretty: 1 // RETURNS A READABLE JSON
    }
  })
}