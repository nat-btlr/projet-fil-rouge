import React from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import { Container } from 'react-bootstrap';
import './homedashboard.css';

import { Link } from 'react-router-dom';


const HomeDashboard = () => {
  return (
    <>
      <NavAdmin />

      <Container className="conteneur-homedashboard">
        <h1 className="titre-homedashboard">Bienvenue sur votre tableau de bord</h1>

        <div className="images-homedashboard">
          <div>
            <Link to="/gestion-videos">
              <img className='elements' src="src/components/Images/gestion_videos.png" alt="vidéo" />
              <h4>Gestion des vidéos</h4>
            </Link>
          </div>

          <div>
            <Link to="/gestion-membres">
              <img className='elements' src="src/components/Images/gestion_profil.png" alt="profil" />
              <h4>Gestion des membres</h4>
            </Link>
          </div>

          <div>
            <Link to="/gestion-commentaires">
              <img className='elements' src="src/components/Images/gestion_comm.png" alt="commentaire" />
              <h4>Gestion des commentaires</h4>
            </Link>
          </div>
        </div>
      </Container>
      <FooterAdmin />
    </>
  );
};

export default HomeDashboard;
