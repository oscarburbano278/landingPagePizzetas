import React from 'react';
import '../assets/estilos/Article.css';

const Article = () => {
  return (
    <article>
      <h2>¡Ofertas Especiales!</h2>
      <p>Disfruta de nuestra pizza del mes con un 20% de descuento.</p>
      <p>Compra 2 pizzas y llévate una bebida gratis.</p>
      {/* Agrega más promociones aquí */}
      <img src="/img/promo.jpg" alt="Promoción especial" />
    </article>
  );
};

export default Article;