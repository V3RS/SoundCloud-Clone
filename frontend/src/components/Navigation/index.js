// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="nav-bar-btn" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <nav id="nav">
        <NavLink className="nav-bar-btn" exact to="/">
          Home
        </NavLink>

        {isLoaded && sessionLinks}
      </nav>
    </div>
  );
}

export default Navigation;
