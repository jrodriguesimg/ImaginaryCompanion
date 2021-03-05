function Login({ slackUserId, handleLogout }) {
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
    <div className="buttons-wrapper">
      <h1>Slack ID: {slackUserId}</h1>
      <button class="message-button" onClick={() => handleMessage("checkin")}>
        Checkin
      </button>
      <button class="message-button" onClick={() => handleMessage("leaving")}>
        Leaving
      </button>
      <button class="message-button" onClick={() => handleMessage("lunch")}>
        Lunch
      </button>
      <button class="message-button" onClick={() => handleMessage("brb")}>
        Be rigth back
      </button>
      <button class="message-button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}

export default Login;
