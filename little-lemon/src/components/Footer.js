// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <p>About Us</p>
          <p>Menu</p>
          <p>Reservations</p>
          <p>Order Online</p>
          <p>Login</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
