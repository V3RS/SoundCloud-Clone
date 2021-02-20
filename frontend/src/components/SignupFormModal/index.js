// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import "./SignupForm.css";

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-bar-btn" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
