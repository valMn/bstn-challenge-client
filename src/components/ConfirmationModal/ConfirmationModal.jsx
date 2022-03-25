import React, { useEffect, useState } from "react";
import "./ConfirmationModal.scss";
import globe from "./globe-svgrepo-com.svg";
import dollar from "./dollar.svg";
import x from "./x.svg";

export default function ConfirmationModal({ modalOn, cpw }) {
  const [showModal, setShowModal] = useState(modalOn);

  const closeModal = (e) => {
    console.log(e);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__exit-button">
              <img
                src={x}
                onClick={(e) => {
                  closeModal();
                }}
              ></img>
            </div>
            <div className="modal__container">
              {/* <div className="modal__globe"> */}
              <img src={globe} className="icon"></img>
              {/* </div> */}
              <div className="modal__text">
                <h2>title</h2>
                <h4>small text</h4>
              </div>
              <div className="modal__metrics">
                <img className="metrics__icon" src={dollar}></img>
                <h4> you're saving the planet!</h4>
              </div>
              <div className="modal__metrics">
                <img className="metrics__icon" src={dollar}></img>
                <h4> you're saving the planet!</h4>
              </div>
              <div className="modal__metrics">
                <img className="metrics__icon" src={dollar}></img>
                <h4> you're saving the planet!</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
