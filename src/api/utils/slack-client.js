import { WebClient } from '@slack/web-api';


const SlackClient = new WebClient(process.env.REACT_APP_SLACK_BOT_TOKEN)

export default SlackClient;