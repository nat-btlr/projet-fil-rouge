import React, { useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import { Link } from 'react-router-dom';
import './GestionVideos.css'; 

import pexels1 from '../Images/pexels_1.jpg';
import pexels2 from '../Images/pexels_2.jpg';
import pexels3 from '../Images/pexels_3.jpg';
import pexels5 from '../Images/pexels_5.jpg';

//mettre attributs de la base de données avec requête HTTP cf. CONTROLLER //
const mockVideos = [
  { id: 1, titre: "Comment gérer sa fatigue ?", categorie: "Santé", auteur: "Alice", image: pexels1 },
  { id: 2, titre: "Préparation à la naissance", categorie: "Préparation", auteur: "Bob", image: pexels2 },
  { id: 3, titre: "Cosmétiques bio", categorie: "Cosmétique", auteur: "Alice", image: pexels3 },
  { id: 4, titre: "Écologie à la maison", categorie: "Écologie", auteur: "Charlie", image: pexels5 }
];

const GestionVideos = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const allCategories = [...new Set(videos.map(v => v.categorie))];
  const allAuthors = [...new Set(videos.map(v => v.auteur))];

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleAuthorChange = (author) => {
    setSelectedAuthors(prev => 
      prev.includes(author) ? prev.filter(a => a !== author) : [...prev, author]
    );
  };

  const filteredVideos = videos.filter(video => {
    const matchSearch = video.titre.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategories.length ? selectedCategories.includes(video.categorie) : true;
    const matchAuthor = selectedAuthors.length ? selectedAuthors.includes(video.auteur) : true;
    return matchSearch && matchCategory && matchAuthor;
  });

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

        <Form className="recherche-video mb-3 d-flex" style={{ gap: '10px' }}>
          <Form.Control
            type="text"
            placeholder="Rechercher une vidéo"
            value={search}
            onChange={handleSearchChange}
          />
          <Button id="boutonRechercher" onClick={(e) => e.preventDefault()}>Rechercher</Button>
        </Form>

        <div className="mb-3">
          <span className='filtre-label'>Catégories :</span>
          {allCategories.map(category => (
            <Form.Check
              inline
              key={category}
              label={category}
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          ))}

          <span className='filtre-label'>Auteurs :</span>
          {allAuthors.map(author => (
            <Form.Check
              inline
              key={author}
              label={author}
              type="checkbox"
              checked={selectedAuthors.includes(author)}
              onChange={() => handleAuthorChange(author)}
            />
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <Button id='btn-carrousel' onClick={prevSlide}>{'<'}</Button>

          <Row className="flex-grow-1">
            {filteredVideos.slice(currentIndex, currentIndex + 3).map(video => (
              <Col key={video.id} md={4} className="mb-4">
                <Card>
                  <Card.Img src={video.image} />
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

          <Button id='btn-carrousel' onClick={nextSlide}>{'>'}</Button>
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
