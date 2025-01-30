import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Supermarket</h1>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Sign Up</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;