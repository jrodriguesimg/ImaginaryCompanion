import SlackClient from './utils/slack-client'

export const postMessage = ({username, text, channel, icon_url}) => SlackClient.chat.postMessage({username, text, channel, icon_url});