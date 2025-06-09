import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import './gestionvideos.css';
import FooterAdmin from "../FooterAdmin/footeradmin";
import { Button, Form } from 'react-bootstrap';
import CarrouselMembres from "../CarrouselMembres/CarrouselMembres";

const GestionVideos = () => (
  <>
<NavAdmin />
      <div>
        <h1>Gestion des vidéos</h1>
        <div className='container-gestion'>
          <a className="lien-telechargement" href="">Télécharger une nouvelle vidéo ?</a>
          <div id='rech'>
            <h5>Rechercher une vidéo :</h5>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Rechercher une vidéo"
                className="me-2"
                aria-label="Search"
              />
              <Button id="boutonRechercher">Rechercher</Button>
              <h5>Filtrer les vidéos :</h5>
                <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Catégorie"
            name="categorie"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Auteur"
            name="auteur"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
            </Form>
          </div>
        </div>
        <CarrouselMembres />
      </div>
      <FooterAdmin />
    
  </>
);

export default GestionVideos;