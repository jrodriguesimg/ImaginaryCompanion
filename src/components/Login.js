import blueLogo from '../images/blue-logo.svg';

function Login({handleClick, handleChange}) {

  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={blueLogo} alt="logo" />
        <div className="input-wrapper">
          <label>Slack ID</label>
          <input type="text" placeholder="Please insert your slack id" onChange={handleChange}/>
          <button onClick={handleClick}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  )
}


export default Login;
