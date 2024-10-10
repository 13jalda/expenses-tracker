import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import WeatherWidget from './WeatherWidget';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/expenses">Expenses</NavLink></li>
        <li><NavLink to="/incomes">Incomes</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>
      <WeatherWidget /> {/* Añadimos el componente del clima */}
    </nav>
  );
};

export default withRouter(Navbar);;
