import React from 'react';
import '../assets/estilos/Header.css';

const Header = () => {
  return (
    <header>
      <img src="tu-logo.png" alt="Logo de tu sitio web" />
      <h1>Mi Increíble Sitio Web</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;