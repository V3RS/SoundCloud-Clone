// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import "./Navigation.css";
import logo from "./logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="navbar">
      <nav id="nav">
        <div id="logo">
          <img src={logo} />

          <NavLink id="homeBtn" className="nav-bar-btn" exact to="/">
            SOUNDWAVE
          </NavLink>
        </div>

        {isLoaded && sessionLinks}
      </nav>
    </div>
  );
}

export default Navigation;
