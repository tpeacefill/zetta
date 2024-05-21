import React from 'react';
import './navelements.css';
import NavItem from '../Components/navitem'; // Import the NavItem component

const NavElements = () => {
  const navItems = ['Home', 'About us', 'How it works', 'Products', 'Partners'];

  return (
    <div className="nav-elements">
      <ul className='nav-elements-container'>
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}

export default NavElements;
