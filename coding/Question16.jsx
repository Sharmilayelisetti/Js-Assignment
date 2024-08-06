// 16. Write a React component that implements a carousel.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentIndex]} alt="Carousel" style={{ width: '300px' }} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

ReactDOM.render(<Carousel />, document.getElementById('root'));
