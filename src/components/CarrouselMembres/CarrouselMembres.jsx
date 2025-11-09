// CarrouselMembres.jsx
import React, { useState, useEffect } from 'react';
import './CarrouselMembres.css';
import Profil from '../Images/profil.png';

const CarrouselMembres = ({ membres = [], minnieWidth = '70%', imageWidth = '150px', imageHeight = '150px', onDelete }) => {
  useEffect(() => {
    setCurrentIndex(0);
  }, [membres.length]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= membres.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, membres.length - 6) : prevIndex - 1
    );
  };

  const confirmDelete = (id) => {
  setSelectedId(id);
  setShowConfirm(true);
  };

  const handleDelete = async () => {
        if (onDelete) {
      await onDelete(selectedId);
      setCurrentIndex(0);
    }
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div className='carrousel-conteneur' style={{ width: minnieWidth }}>
      <button className='prev-button' onClick={prevSlide}>&#10094;</button>
      <div className='carrousel-membres-container'>
        {membres.slice(currentIndex, currentIndex + 6).map((membre, idx) => {
          return (
            <div key={membre.id ? membre.id : `${membre.username}-${idx}`} className='carrousel-membre-item'>
              <img
                src={membre.imageUrl || Profil}
                alt={membre.username}
                className='profil'
                style={{ width: imageWidth, height: imageHeight }}
              />
              <h3>{membre.username}</h3>
              <p className='texte'>{membre.email}</p>
              <div className='actions'>
                <a href='#' onClick={(e) => { e.preventDefault(); confirmDelete(membre.id); }}>Supprimer ?</a>
              </div>
            </div>
          );
        })}
      </div>
      <button className='next-button' onClick={nextSlide}>&#10095;</button>

      {showConfirm && (
        <div className='popup-overlay'>
          <div className='popup-content'>
            <p>Confirmer la suppression du profil ?</p>
            <button className='button-annuler' onClick={() => setShowConfirm(false)}>Annuler</button>
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrouselMembres;
