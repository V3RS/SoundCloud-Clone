// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
// import { Modal } from "../../context/Modal";
// import LoginForm from "../../LoginFormModal/"
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        // console.log("data-errors,", data.errors);
        if (data && data.errors) {
          if (!(typeof data.errors[0] === "object"))
            return setErrors(data.errors);
          const err = [];
          data.errors.map((error) => err.push(error.message));
          setErrors(err);
        }
      });
      // console.log(errors);
      // if (!errors) history.push("/dashboard");
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
    return dispatch(sessionActions.demoLogin());
  };

  return (
    <div className="signup-container">
      <div id="signup-title">Welcome To SoundWave</div>
      <form onSubmit={demoSubmit}>
        <button className="signupdemoBtn" id="demoBtn2" type="submit">
          Demo Log In
        </button>
      </form>
      <div className="signup-or">
        <div className="before-or"></div>
        <div>or</div>
        <div className="after-or"></div>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* <label>
          Email */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-inputs"
          placeholder="Email"
          required
        />
        {/* </label> */}
        {/* <label>
          Username */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-inputs"
          placeholder="Username"
          required
        />
        {/* </label> */}
        {/* <label>
          Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-inputs"
          placeholder="Password"
          required
        />
        {/* </label> */}
        {/* <label>
          Confirm Password */}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-inputs"
          placeholder="Confirm Password"
          required
        />
        {/* </label> */}
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    </div>
  );
}

export default SignupFormPage;
