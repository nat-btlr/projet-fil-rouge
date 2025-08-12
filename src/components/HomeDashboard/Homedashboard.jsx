import '../HomeDashboard/style.css';
import NavAdmin from '../NavAdmin/NavAdmin';
import FooterAdmin from '../FooterAdmin/footeradmin';
import { Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const HomeDashboard = () => {
  return (
    <>
      <NavAdmin />

      <Container className="conteneur-homedashboard">
        <h1 className="montitre">Bienvenue sur votre tableau de bord</h1>

        <div className="cards-homedashboard">
          <div className="card-item">
            <Link to="/gestion-videos">
              <img className='items' src="src\components\Images\gestion_videos.png" alt="vidéo" />
              <h4>Gestion des vidéos</h4>
            </Link>
          </div>

          <div className="card-item">
            <Link to="/gestion-membres">
              <img className='items'
              src="src\components\Images\gestion_profil.png"alt="profil" />
              <h4>Gestion des membres</h4>
            </Link>
          </div>

          <div className="card-item">
            <Link to="/gestion-commentaires">
              <img className='items' src="src\components\Images\gestion_comm.png" alt="commentaire" />
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
