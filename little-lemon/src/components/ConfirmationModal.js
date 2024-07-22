// src/components/ConfirmationModal.js
import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-overlay" onClick={onClose}>
      <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
        <h2>Reservation Confirmed!</h2>
        <p>Your reservation has been successfully submitted.</p>
        <button className="confirmation-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
