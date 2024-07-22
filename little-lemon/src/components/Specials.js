// src/components/Specials.js
import React from 'react';
import './Specials.css';
import img1 from '../images/bruchetta.jpeg';
import img2 from '../images/greeksalad.jpeg';
import img3 from '../images/lemondessert.jpg'

const specialsData = [
  { name: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic, and rosemary croutons.", image: img1 },
  { name: "Bruschetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", image: img2 },
  { name: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", image: img3 }
];

const Specials = () => {
  return (
    <section className="specials">
      <h2>This week’s specials!</h2>
      <div className="specials-container">
        {specialsData.map((item, index) => (
          <div key={index} className="special-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name} <span>{item.price}</span></h3>
            <p>{item.description}</p>
            <button>Order a delivery</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
