import React, { useState } from 'react';
import './minnie.css'; // Fichier CSS pour styliser le carrousel

import Image from '../Images/pexels_1.jpg';
import Image2 from '../Images/pexels_3.jpg';

const Minnie = ({ minnieWidth = '70%', imageWidth = '150px', imageHeight = '200px' }) => {
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
    },
    {
      imageUrl: Image2
    },
    {
      imageUrl: Image2
    },
    {
      imageUrl: Image2
    },
    {
      imageUrl: Image2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 3 ? 0 : prevIndex + 1));
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 3 : prevIndex - 1));
  };

  return (
    <div className='minnie-container' style={{ width: minnieWidth }}>
      <h2>Nouveautés</h2>
      <button className='prev-button' onClick={prevSlide}>
        &#10094;
      </button>
      <div className='minnie'>
        {movies.slice(currentIndex, currentIndex + 6).map((movie, index) => (
          <div key={index} className='minnie-slide'>
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

export default Minnie;
