// src/components/Main.js
import React, { useReducer, useState } from 'react';
import CallToAction from './CallToAction';
import BookingForm from './BookingForm';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';
import { fetchAPI, submitAPI } from '../api';
import './Main.css';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  return fetchAPI(action.date);
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      setShowBookingForm(false); 
      setShowConfirmation(true); 
    }
  };

  return (
    <div>
      <CallToAction setShowBookingForm={setShowBookingForm} />
      <Modal isOpen={showBookingForm} onClose={() => setShowBookingForm(false)}>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </Modal>
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
};

export default Main;
