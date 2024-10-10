import React from 'react';
import './aboutUs.scss'; // Asegúrate de tener los estilos en este archivo

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h2>About Our Financial Platform</h2>
        <p>
          Welcome to our financial management system where we help you track and grow your assets effectively. 
          Our platform provides you with real-time insights into your expenses, incomes, and market trends.
        </p>
      </div>
      <div className="about-us-image">
        <img src="../../static/images/AbouUs-image.jpg" alt="Financial Market Overview" />
      </div>
    </div>
  );
};

export default AboutUs;
