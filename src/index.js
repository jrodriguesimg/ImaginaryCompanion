import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExtensionPopup from './components/ExtensionPopup';
import reportWebVitals from './reportWebVitals';

const isChromeExt = (window.chrome && chrome.runtime && chrome.runtime.id !== undefined)

const CurrentApp = (!isChromeExt ? ExtensionPopup : App);

ReactDOM.render(
  <React.StrictMode>
    <CurrentApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
