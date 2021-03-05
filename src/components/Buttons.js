import Button from "./Buttons/Button.js";
import "./Buttons.css";

import { postMessage } from "../api/messages";

function Buttons({ slackUserInfo, handleLogout }) {
  function getMessageText(message) {
    switch (message) {
      case "checkin":
        return "morning";
      case "leaving":
        return "heading out";
      case "lunch":
        return "lunch";
      case "brb":
        return "coffe break";
      case "back":
        return "back to work";

      default:
        alert("invalid message");
    }
  }

  function handleMessage(message) {
    const text = getMessageText(message);
    console.log(slackUserInfo);
    postMessage({
      username: slackUserInfo.user.profile.real_name,
      text,
      channel: "#manager-darmstadiu-bromine",
      icon_url: slackUserInfo.user.profile.image_192,
    })
      //.then(() => alert(message))
      .catch((error) => alert(error.message));
  }

  return (
    <div className="buttons-page">
      <img
        className="buttons-user-img"
        alt="user"
        src={slackUserInfo.user.profile.image_192}
      />
      <h1>Slack ID: {slackUserInfo.user.profile.real_name}</h1>
      <div className="buttons-wrapper-wrapper">
        <div className="button-wrapper">
          <Button
            className="checkin"
            text="Checkin"
            onClick={() => handleMessage("checkin")}
          />
          <Button
            className="leaving"
            text="Leaving"
            onClick={() => handleMessage("leaving")}
          />
          <Button
            className="lunch"
            text="Lunch"
            onClick={() => handleMessage("lunch")}
          />
          <Button
            className="brb"
            text="Be right Back"
            onClick={() => handleMessage("brb")}
          />
          <Button
            className="checkin"
            text="Back"
            onClick={() => handleMessage("back")}
          />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
