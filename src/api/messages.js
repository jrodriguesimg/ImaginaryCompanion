import HttpClient from './utils/http-client'

export const postMessage = ({username, text, channel, icon_url}) => {
  return HttpClient().request({
    method: 'post',
    url: '/chat.postMessage',
    params: {
      username,
      text,
      channel,
      icon_url
    }
  })
}