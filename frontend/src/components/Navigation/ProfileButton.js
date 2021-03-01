// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    //! bug with not redirecting to home page
    e.preventDefault();
    history.push("/");
    dispatch(sessionActions.logout());
    // return <Redirect to="/" />;
  };

  return (
    <>
      <button className="profile-btn" onClick={openMenu}>
        {/* <i className="fas fa-user-circle" /> */}
        <i className="fas fa-ellipsis-h"></i>
      </button>
      {showMenu && (
        <div className="drop-down-container">
          <ul className="profile-dropdown">
            <li>Hello {user.username}!</li>
            <li>
              <button className="logout-btn" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
