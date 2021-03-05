import logo from "./images/logo.svg";
import { useState } from "react";
import Login from "./components/Login";
import Buttons from "./components/Buttons";
import "./App.css";
import { getUserInfo} from './api/users'

function App() {

  let [isAuth, setIsAuth] = useState(false);
  let [slackUserId, setSlackUserId] = useState("");
  let [slackUserInfo, setSlackUserInfo] = useState();
  let [isChromeExt] = useState(window.chrome && chrome.runtime && chrome.runtime.id !== undefined)  

  let handleChange = (event) => {
    setSlackUserId(event.target.value);
  };

  let handleClick = async () => {
    try {
      const userInfo = await getUserInfo(slackUserId) 
      setSlackUserInfo(userInfo)
    } catch {
      return alert('Invalid User ID')
    }
    setIsAuth(true);
  };

  let handleLogout = () => {
    setSlackUserId(null);
    setIsAuth(false);
  };

  return (
    <div className={isChromeExt ? 'App ChromeExtension' : 'App'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>IMAGINARY CLOUD WORK COMPANION</p>
      </header>
      {isAuth ? (
        <Buttons slackUserId={slackUserId} slackUserInfo={slackUserInfo} handleLogout={handleLogout} />
      ) : (
        <Login handleClick={handleClick} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
