import React from 'react';
import './navitem.css'; // You can add styles specific to NavItem here if needed

const NavItem = ({ text }) => {
  return (
    <li className="nav-item">
      {text}
    </li>
  );
}

export default NavItem;
