import React from 'react';
import '../assets/estilos/Aside.css';

const Aside = () => {
  return (
    <aside>
      <h2>Nuestro Menú</h2>
      <ul>
        <li>Pizza Margherita</li>
        <li>Pizza Pepperoni</li>
        <li>Pizza Vegetariana</li>
        <li>Pizza Cuatro Quesos</li>
        {/* Agrega más opciones de pizza aquí */}
        <li>Bebidas</li>
        <ul>
          <li>Coca-Cola</li>
          <li>Sprite</li>
          {/* Agrega más opciones de bebidas aquí */}
        </ul>
      </ul>
    </aside>
  );
};

export default Aside;