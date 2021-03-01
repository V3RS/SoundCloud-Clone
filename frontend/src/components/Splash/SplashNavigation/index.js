// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../../LoginFormModal";
import SignupFormModal from "../../SignupFormModal";

import "./SplashNavigation.css";
import logo from "./logo.png";

function SplashNavigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = undefined;
  } else {
    sessionLinks = (
      <div className="splash-navBtnContainer">
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="splash-navbar">
      <nav id="splash-nav">
        <div id="splash-logo">
          <img id="splash-imgLogo" src={logo} />
          <NavLink id="splash-homeBtn" exact to="/">
            SOUNDWAVE
          </NavLink>
        </div>

        {isLoaded && sessionLinks}
      </nav>
    </div>
  );
}

export default SplashNavigation;
