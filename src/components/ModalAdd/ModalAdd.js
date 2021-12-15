import React, { useEffect } from "react";
import InputCountry from "../InputCountry";
import MaterialUIPickers from "./MaterialUIPickers";
import BasicTextFields from "./BasicTextFields";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        console.log("handleKeyDown");
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e);
    // if (name.trim() === "" || number.trim() === "") {
    //   alert("Fill all fields!");
    //   return;
    // }
    // const existContact = isContsctExist();
    // if (existContact) {
    //   alert(`${existContact.name} is already in contacts.`);
    //   setName("");
    //   setNumber("");
    //   return;
    // }

    // setName("");
    // setNumber("");
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>
        <form className="Form" onClick={handleSubmit}>
          <h2 className={s.formaTitle}>Modal window</h2>

          <div className={s.formaPosition}>
            <div className={s.formaEmail}>
              <InputCountry />
              <MaterialUIPickers />
            </div>

            <div className={s.formaInputs}>
              <BasicTextFields />
            </div>
          </div>

          <div className={s.formaButtonPosition}>
            <button
              type="button"
              className={s.formaButton}
              onClick={handleBackdropClick}
            >
              Cancel
            </button>
            <div className={s.formaSave}>
              <button className={s.formaButton}>Save and Close</button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
}
