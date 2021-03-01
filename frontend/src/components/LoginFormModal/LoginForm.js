import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";
// import { closeLogin } from "../../store/modal";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  //grabbing the current user
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if user exists return to home page
  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // use log in function and dispatch to backend
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (!errors) history.push("/dashboard");
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    // closeLogin();
    history.push("/dashboard");
    return dispatch(sessionActions.demoLogin());
  };

  return (
    <div className="login-container">
      <div id="login-title">Welcome back!</div>
      <form onSubmit={demoSubmit}>
        <button className="loginFormBtns" id="demoBtn" type="submit">
          Demo Log In
        </button>
      </form>
      <div className="login-or">
        <div className="before-or"></div>
        <div>or</div>
        <div className="after-or"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>
            Email address or username */}
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Email address or username"
            className="login-inputs"
            required
          />
          {/* </label> */}
        </div>
        <div>
          {/* <label>
            Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-inputs"
            required
          />
          {/* </label> */}
        </div>
        <button className="loginFormBtns" type="submit">
          Log In
        </button>
        {/* <button
          className="loginFormBtns"
          onClick={() => history.push("/signup")}
        >
          Register Here
        </button> */}
      </form>
      <ul className="form2-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {/* test for demo log in */}
    </div>
  );
}
