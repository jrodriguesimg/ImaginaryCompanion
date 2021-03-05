import axios from 'axios';


const HttpClient = () => axios.create({
  baseURL: process.env.REACT_APP_SLACK_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_SLACK_BOT_TOKEN}`,
  }
})

export default HttpClient;