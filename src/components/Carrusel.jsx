import React, { useState, useEffect } from 'react';
import '../assets/estilos/Carrusel.css';
import logo1 from '../assets/imagenes/pizza1.jpeg'
import logo2 from '../assets/imagenes/pizza2.jpeg'
import logo3 from '../assets/imagenes/pizza3.jpeg'

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState([
    logo1,
    logo2,
    logo3
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Cambia de slide cada 3 segundos

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>&#10094;</button>
      <img src={images[currentSlide]} alt="Imagen del carrusel" />
      <button onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carrusel;