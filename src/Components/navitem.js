import React from 'react';
import './navitem.css';

const NavItem = ({ text, isActive, onClick }) => {
  return (
    <li
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

export default NavItem;
