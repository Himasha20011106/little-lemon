// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/reservations" element={<div>Reservations Page</div>} />
        <Route path="/order" element={<div>Order Online Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
