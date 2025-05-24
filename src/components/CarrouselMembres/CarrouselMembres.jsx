import React, { useState } from 'react';
import './style.css';
import Profil from '../Images/profil.png';

const CarrouselMembres = ({ minnieWidth = '70%', imageWidth = '150px', imageHeight = '150px' }) => {
  const membres = [
    {
      id: '001',
      pseudo: 'MamanCool',
      email: 'maman1@mail.com',
      imageUrl: Profil
    },
    {
      id: '002',
      pseudo: 'MamanZen',
      email: 'zen@maman.com',
      imageUrl: Profil
    },
    {
    id: '003',
      pseudo: 'MamanZen',
      email: 'zen@maman.com',
      imageUrl: Profil,
    },
    {
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },
    {
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },{
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },{
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },
    {
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },
    {
      id: '004',
      pseudo: 'MamanZen',
      email: 'mama@gmail.com',
      imageUrl: Profil
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === membres.length - 3 ? 0 : prevIndex + 1));
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? membres.length - 3 : prevIndex - 1));
  };

  return (
    <div className='minnie-container' style={{ width: minnieWidth }}>
      <button className='prev-button' onClick={prevSlide}>
        &#10094;
      </button>
      <div className='minnie'>
        {membres.slice(currentIndex, currentIndex + 6).map((membre, index) => (
          <div key={index} className='minnie-slide'>
            <img
              src={membre.imageUrl}
              alt={membre.title}
              className='profil'
              style={{ width: imageWidth, height: imageHeight }}
            />
            <h3 className='membre-title'>{membre.title}</h3>
          </div>
        ))}
      </div>
      <button className='next-button' onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default CarrouselMembres;
