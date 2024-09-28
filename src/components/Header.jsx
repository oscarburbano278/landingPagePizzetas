import React from 'react';
import '../assets/estilos/Header.css';

const Header = ({ logo, title }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>{title}</h1>
      <nav>
        {/* ... resto del código */}
      </nav>
    </header>
  );
};

export default Header;