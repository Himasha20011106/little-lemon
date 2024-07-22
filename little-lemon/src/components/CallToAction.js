// src/components/CallToAction.js
import React  from 'react';
import './CallToAction.css';
import image1 from '../images/image1.jpg'

const CallToAction = ({ showBookingForm, setShowBookingForm }) => {
  const handleButtonClick = () => {
    setShowBookingForm(true);
  };

  return (
    <section className="cta">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={handleButtonClick} className='reservation-btn'>Reserve a Table</button>
      </div>
      <div className="cta-image">      
        <img src={image1} alt="Food" />
      </div>
    </section>
  );
};

export default CallToAction;



