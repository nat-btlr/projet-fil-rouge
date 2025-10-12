// CarrouselMembres.jsx
import React, { useState } from 'react';
import './CarrouselMembres.css';
import Profil from '../Images/profil.png';

const CarrouselMembres = ({ membres = [], minnieWidth = '70%', imageWidth = '150px', imageHeight = '150px' }) => {
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

  const handleDelete = () => {
    // Pour la suppression, tu peux gérer ça dans GestionMembres si besoin
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div className='carrousel-conteneur' style={{ width: minnieWidth }}>
      <button className='prev-button' onClick={prevSlide}>&#10094;</button>
      <div className='minnie'>
        {membres.slice(currentIndex, currentIndex + 6).map((membre) => (
          <div key={membre.id} className='membres-slide'>
            <img
              src={membre.imageUrl || Profil}
              alt={membre.pseudo}
              className='profil'
              style={{ width: imageWidth, height: imageHeight }}
            />
            <h3>{membre.pseudo}</h3>
            <p className='texte'>ID : {membre.id}</p>
            <p className='texte'>{membre.email}</p>
            <div className='actions'>
              <a href='#' onClick={(e) => { e.preventDefault(); confirmDelete(membre.id); }}>Supprimer ?</a>
            </div>
          </div>
        ))}
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
