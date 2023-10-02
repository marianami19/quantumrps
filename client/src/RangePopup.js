import React, { useState } from "react";
import Modal from "react-modal";

// Define the modal styles
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

Modal.setAppElement("#root"); // Set the root element for accessibility

function RangePopup({ isOpen, onRequestClose, lowerRange, upperRange }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Range Popup"
    >
      <h2>Your Roofing Estimate</h2>
      <p>
        {" "}
        ${lowerRange.toFixed(2)} - ${upperRange.toFixed(2)}
      </p>
      <button className="btn btn-primary btn-lg" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
}

export default RangePopup;
