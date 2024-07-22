// src/components/About.js
import React from 'react';
import './About.css';
import image1 from '../images/about1.jpg';
import image2 from '../images/about2.jpg';

const About = () => {
  return (
    <section className="about">
      <h2>Little Lemon Chicago</h2>
      <p>At Little Lemon, we blend tradition with innovation. Our dishes are crafted with the freshest ingredients and inspired by Mediterranean flavors. Come join us for an unforgettable dining experience.</p>
      <div className="about-images">
        <img src={image1} alt="Adrian" />
        <img src={image2} alt="Mario" />
      </div>
    </section>
  );
};

export default About;
