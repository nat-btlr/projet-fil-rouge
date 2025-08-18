import React, { useState } from 'react';
import './carrie.css'; 

import Image from '../Images/pexels_1.jpg';
import Image2 from '../Images/pexels_3.jpg';

const Carrie = ({ carrieWidth = '70%', imageWidth = '350px', imageHeight = '200px' }) => {
  const movies = [
    {
      imageUrl: Image
    },
    {
      imageUrl: Image
    },
    {
      imageUrl: Image
    },
    {
      imageUrl: Image2
    },
    {
      imageUrl: Image2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 3 : prevIndex - 1));
  };

  return (
    <div className='carrie-container' style={{ width: carrieWidth }}>
      <button className='prev-button' onClick={prevSlide}>
        &#10094;
      </button>
      <div className='carrie'>
        {movies.slice(currentIndex, currentIndex + 3).map((movie, index) => (
          <div key={index} className='carrie-slide'>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className='movie-poster'
              style={{ width: imageWidth, height: imageHeight }}
            />
            <h3 className='movie-title'>{movie.title}</h3>
          </div>
        ))}
      </div>
      <button className='next-button' onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrie;
