// src/pages/Homepage.js
import React from 'react';
import Main from '../components/Main';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Main />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Homepage;
