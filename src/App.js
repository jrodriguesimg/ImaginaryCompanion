import logo from './images/logo.svg';
import {useState} from 'react'
import Login from './components/Login'
import './App.css';


function App() {
  let [isAuth, setIsAuth] = useState(false)
  let [slackUserId, setSlackUserId] = useState('')

  let handleChange = (event) => {
    setSlackUserId(event.target.value)
  }

  let handleClick = () => {
    setIsAuth(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>IMAGINARY CLOUD WORK COMPANION</p>
      </header>
      {
        isAuth ? <div>{slackUserId}</div> : <Login handleClick={handleClick} handleChange={handleChange} />
      }
    </div>
  );
}

export default App;
