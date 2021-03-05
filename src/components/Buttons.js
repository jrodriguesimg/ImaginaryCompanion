import Button from "./Buttons/Button.js";
import "./Buttons.css";

function Buttons({ slackUserInfo, handleLogout }) {
  function handleMessage(message) {
    // TODO: call api
    switch (message) {
      case "checkin":
        return alert("checkin");
      case "leaving":
        return alert("leaving");
      case "lunch":
        return alert("lunch");
      case "brb":
        return alert("brb");

      default:
        alert("invalid message");
    }
  }
  return (
    <div className="buttons-page">
      <img
        className="buttons-user-img"
        alt="user"
        src={slackUserInfo.user.profile.image_192}
      />
      <h1>Slack ID: {slackUserInfo.user.profile.display_name}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Buttons;
