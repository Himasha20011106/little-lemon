// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
import T1 from '../images/t1.jpeg'
import T2 from '../images/t2.jpg'
import T3 from '../images/t4.jpeg'

const testimonialsData = [
  { name: "Sarah", rating: "5 stars", review: "Amazing food and great service!", photo: T1 },
  { name: "Jake", rating: "4 stars", review: "Loved the ambiance and the food.", photo: T2 },
  { name: "Katie", rating: "5 stars", review: "Best Mediterranean restaurant in town!", photo: T3}
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div key={index} className="testimonial-item">
            <img src={item.photo} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.rating}</p>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
