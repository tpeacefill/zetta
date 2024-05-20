import React from 'react';
import './nav.css'; 
import logo from '../Images/Zetta_Logo-removebg-preview 1.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <img src= {logo} alt='logo' />
      <div className='nav-elements'></div>
      <button className='contact-button'>Contact Us</button>
    </nav>
  );
}

export default Nav;
