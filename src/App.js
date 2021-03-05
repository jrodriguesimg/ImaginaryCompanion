import logo from "./images/logo.svg";
import { useState } from "react";
import Login from "./components/Login";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  let [isAuth, setIsAuth] = useState(false)
  let [slackUserId, setSlackUserId] = useState('')
  let [isChromeExt] = useState(window.chrome && chrome.runtime && chrome.runtime.id !== undefined)

  let handleChange = (event) => {
    setSlackUserId(event.target.value);
  };

  let handleClick = () => {
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
        <Buttons slackUserId={slackUserId} handleLogout={handleLogout} />
      ) : (
        <Login handleClick={handleClick} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
