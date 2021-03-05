import SlackClient from './utils/slack-client'

export const getUserInfo= (id) => SlackClient.users.info({user: id, pretty: 1});