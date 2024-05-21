import React, { useState } from 'react';
import './navelements.css';
import NavItem from '../Components/navitem'; // Import the NavItem component

const NavElements = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index to 0 (Home)
  const navItems = ['Home', 'About us', 'How it works', 'Products', 'Partners'];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav-elements">
      <ul className='nav-elements-container'>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            text={item}
            isActive={index === activeIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default NavElements;
