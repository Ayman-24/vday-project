import React, { useState } from "react";
import Modal from "react-modal";
import "../src/NameModal.css"; // Import a separate CSS file for styling

Modal.setAppElement("#root"); // Set the root element as the accessible app element

function NameModal({ isOpen, onRequestClose, onSave }) {
  const [name, setName] = useState("");

  const handleSave = () => {
    onSave(name);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Name Modal"
      className="custom-modal" // Add a class for custom styling
      overlayClassName="custom-overlay" // Add a class for the modal overlay
    >
      <p className="modal-text">What's your name?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="modal-input" // Add a class for input styling
      />
      <button onClick={handleSave} className="modal-button">
        Enter
      </button>
    </Modal>
  );
}

export default NameModal;
