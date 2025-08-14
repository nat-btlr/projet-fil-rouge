import React, { useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import FooterAdmin from '../FooterAdmin/footeradmin';
import { Link } from 'react-router-dom';
import './style.css';

import pexels1 from '../Images/pexels_1.jpg';
import pexels2 from '../Images/pexels_2.jpg';
import pexels3 from '../Images/pexels_3.jpg';
import pexels5 from '../Images/pexels_5.jpg';

const mockVideos = [
  {
    id: 1,
    titre: "Comment gérer sa fatigue ?",
    categorie: "Santé",
    auteur: "XXXXXXXX",
    image: pexels1
  },
  {
    id: 2,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: pexels2
  },
  {
    id: 3,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: pexels3
  },
  {
    id: 4,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: pexels5
  }
];

const GestionVideos = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [search, setSearch] = useState('');
  const [filterCategorie, setFilterCategorie] = useState(false);
  const [filterAuteur, setFilterAuteur] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Filtrage
  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredVideos = videos.filter(video => {
    const matchSearch = video.titre.toLowerCase().includes(search.toLowerCase());
    const matchCategorie = filterCategorie ? video.categorie === "Santé" : true;
    const matchAuteur = filterAuteur ? video.auteur === "XXXXXXXX" : true;
    return matchSearch && matchCategorie && matchAuteur;
  });

  // Carrousel navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= filteredVideos.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredVideos.length - 3 : prevIndex - 1
    );
  };

  // Suppression
  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = () => {
    setVideos((prev) => prev.filter((v) => v.id !== selectedId));
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <>
      <NavAdmin />
      <Container className="my-4">
        <h1 className="text-center">Gestion des vidéos</h1>

        <a className="lien-video" href="/ajouter-video">Télécharger une nouvelle vidéo ?</a>

        <Form className="recherche-video" style={{ gap: '10px' }}>
          <Form.Control
            type="text"
            placeholder="Rechercher une vidéo"
            value={search}
            onChange={handleSearchChange}
          />
          <Button id="boutonRechercher">Rechercher</Button>
        </Form>

        <div className="mb-3">
          <span className='filtre'>Filtrer les vidéos :</span>{' '}
          <Form.Check
            inline
            label="Catégorie"
            type="checkbox"
            checked={filterCategorie}
            onChange={(e) => setFilterCategorie(e.target.checked)}
          />
          <Form.Check
            inline
            label="Auteur"
            type="checkbox"
            checked={filterAuteur}
            onChange={(e) => setFilterAuteur(e.target.checked)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <Button className='btn-carousel' onClick={prevSlide}>
            {'<'}
          </Button>

          <Row className="flex-grow-1">
            {filteredVideos.slice(currentIndex, currentIndex + 3).map(video => (
              <Col key={video.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={video.image} />
                  <Card.Body>
                    <Card.Text>
                      <strong>ID :</strong> {video.id}<br />
                      <strong>Titre :</strong> {video.titre}<br />
                      <strong>Catégorie :</strong> {video.categorie}<br />
                      <strong>Auteur :</strong> {video.auteur}<br />
                      <div className="modif-supp">
                        <Link to={`/modifier-video/${video.id}`}>Modifier ?</Link>
                        <a href="#" onClick={(e) => { e.preventDefault(); confirmDelete(video.id); }}>Supprimer ?</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Button className='btn-carousel'onClick={nextSlide}>
            {'>'}
          </Button>
        </div>

        {showConfirm && (
          <div className='popup-overlay'>
            <div className='popup-content'>
              <p>Confirmer la suppression de la vidéo ?</p>
              <button className='button-annuler' onClick={() => setShowConfirm(false)}>Annuler</button>
              <button onClick={handleDelete}>Supprimer</button>
            </div>
          </div>
        )}
      </Container>
      <FooterAdmin />
    </>
  );
};

export default GestionVideos;
