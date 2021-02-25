import React from "react";
import SplashNavigation from "./SplashNavigation";
import Slider from "./Slider";
import "./Splash.css";
import Search from "./Search";
import TrendingTracks from "./TrendingTracks";
import MobileSplash from "./MobileSplash";
import CreatorSplash from "./CreatorSplash";
import SplashFooter from "./SplashFooter";
import MusicPlayer from "../MusicPlayer";

import Modal from "react-modal";
import SignupForm from "../SignupFormModal/SignupForm";
import LoginForm from "../LoginFormModal/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import {
  openSignup,
  closeSignup,
  openLogin,
  closeLogin,
} from "../../store/modal";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Splash({ isLoaded }) {
  const dispatch = useDispatch();

  const signupState = useSelector((state) => state.modal.signupShow);
  const loginState = useSelector((state) => state.modal.loginShow);

  const closeModal1 = () => dispatch(closeSignup());
  const closeModal2 = () => dispatch(closeLogin());

  return (
    <div className="splash-container">
      <div id="top-splash">
        <SplashNavigation isLoaded={isLoaded} />
        <div className="slider-container">
          <Slider />
        </div>
        <div className="splash-search-box-container">
          <Search />
        </div>
        <div className="trend-tracks-container">
          <TrendingTracks />
        </div>
      </div>
      <div id="bottom-splash">
        <MobileSplash />
        <CreatorSplash />
        {/* <div id="thanks-container"> */}
        <div id="thanks-splash">
          <div id="thanks-content">
            <div>Thanks for listening. Now join in.</div>
            <p>
              Save tracks, follow artists and build playlists. All for free.
            </p>
            <>
              <button
                id="splash-signup-btn"
                onClick={() => dispatch(openSignup())}
              >
                Create account
              </button>
              <Modal
                isOpen={signupState}
                closeTimeoutMS={500}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Signup Modal"
              >
                <SignupForm />
              </Modal>
            </>
            <div id="splash-login-container">
              <p id="splash-log-txt">Already have an account?</p>
              <>
                <button
                  id="splash-login-btn"
                  onClick={() => dispatch(openLogin())}
                >
                  Sign in
                </button>
                <Modal
                  isOpen={loginState}
                  closeTimeoutMS={500}
                  onRequestClose={closeModal2}
                  style={customStyles}
                  contentLabel="Login Modal"
                >
                  <LoginForm />
                </Modal>
              </>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <SplashFooter />
    </div>
  );
}
