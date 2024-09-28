import React from 'react';
import '../assets/estilos/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Mi Pizzería. Todos los derechos reservados.</p>
      <ul>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Ubicación</a></li>
        <li><a href="#">Política de Privacidad</a></li>
      </ul>
      <div className="social-media">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
};

export default Footer;