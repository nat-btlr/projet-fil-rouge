import React, { useState } from 'react';
import './style.css';
import Profil from '../Images/profil.png';

const CarrouselMembres = ({ minnieWidth = '70%', imageWidth = '150px', imageHeight = '150px' }) => {
  const [membres, setMembres] = useState([
    { id: '001', pseudo: 'MamanCool', email: 'maman1@mail.com', imageUrl: Profil },
    { id: '002', pseudo: 'MamanZen', email: 'zen@maman.com', imageUrl: Profil },
    { id: '003', pseudo: 'MamanZen', email: 'zen@maman.com', imageUrl: Profil },
    { id: '004', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
    { id: '005', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
    { id: '006', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
    { id: '007', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
    { id: '008', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
    { id: '009', pseudo: 'MamanZen', email: 'mama@gmail.com', imageUrl: Profil },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === membres.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? membres.length - 3 : prevIndex - 1));
  };

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = () => {
    setMembres((prev) => prev.filter((m) => m.id !== selectedId));
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div className='minnie-container' style={{ width: minnieWidth }}>
      <button className='prev-button' onClick={prevSlide}>
        &#10094;
      </button>

      <div className='minnie'>
        {membres.slice(currentIndex, currentIndex + 6).map((membre) => (
          <div key={membre.id} className='minnie-slide'>
            <img
              src={membre.imageUrl}
              alt={membre.pseudo}
              className='profil'
              style={{ width: imageWidth, height: imageHeight }}
            />
            <h3 className='membre-title'>{membre.pseudo}</h3>
            <p><strong>ID :</strong> {membre.id}</p> {/* Affichage de l'ID */}
            <p>{membre.email}</p>
            <div className='actions'>
              <a href='#' onClick={(e) => e.preventDefault()}>
              Désactiver ?
              </a>{' '}
            
              <a href='#' onClick={(e) => { e.preventDefault(); confirmDelete(membre.id); }}>
              Supprimer ?
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className='next-button' onClick={nextSlide}>
        &#10095;
      </button>

      {showConfirm && (
        <div className='popup-overlay'>
          <div className='popup-content'>
            <p>Confirmer la suppression du profil ?</p>
            <button className='button-annuler' onClick={() => setShowConfirm(false)}>Annuler</button>
            <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrouselMembres;
