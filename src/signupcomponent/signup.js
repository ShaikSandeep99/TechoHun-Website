import react from 'react';
// import './style.css';
function signup () {
    return (
        <>
  <meta name="viewport" content="width-device-width, initial-scale=1.0" />
  <title>Rigister</title>
  <link rel="icon" type="image/x-icon" href="/img/favicon.ico.jpg" />
  <link rel="stylesheet" href="/css-folder/login.css" />
  <div className="div1">
    <div className="div2">
      <h1 id="title">Signup here</h1>
      <form id="f1">
        <div className="input_g">
          <div className="input-f" id="">
            <i className="fa-solid fa-user" />
            <input type="text" placeholder="Name" required="" />
            <br />
          </div>
          <div className="input-f">
            <i className="fa-solid fa-phone" />
            <input type="text" placeholder="Phone Number" required="" />
            <br />
          </div>
          <div className="input-f">
            <i className="fa-solid fa-envelope" />
            <input type="email" placeholder="Email" required="" />
            <br />
          </div>
          <div className="input-f">
            <i className="fa-solid fa-key" />
            <input type="password" placeholder="Password" required="" />
            <br />
          </div>
          <p>
            Already have an account?<a href="login.html"> click here </a>to
            login.
          </p>
          <br />
        </div>
        <div className="btn-f">
          <button type="button">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</>

    )
}
export default signup;