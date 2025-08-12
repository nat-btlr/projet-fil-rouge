import React, { useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';

const mockVideos = [
  {
    id: 1,
    titre: "Comment gérer sa fatigue ?",
    categorie: "Santé",
    auteur: "XXXXXXXX",
    image: "../pexels_1.jpg" 
  },
  {
    id: 2,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: "/pexels_2.jpg"
  },
  {
    id: 3,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: "/pexels_3.jpg"
  },
  {
    id: 4,
    titre: "Titre",
    categorie: "Catégorie",
    auteur: "XXXXXXXX",
    image: "/pexels_5.jpg"
  }
];

const GestionVideos = () => {
  const [search, setSearch] = useState('');
  const [filterCategorie, setFilterCategorie] = useState(false);
  const [filterAuteur, setFilterAuteur] = useState(false);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredVideos = mockVideos.filter(video => {
    const matchSearch = video.titre.toLowerCase().includes(search.toLowerCase());
    const matchCategorie = filterCategorie ? video.categorie === "Santé" : true;
    const matchAuteur = filterAuteur ? video.auteur === "XXXXXXXX" : true;
    return matchSearch && matchCategorie && matchAuteur;
  });

  return (
    <>
      <NavAdmin />
      <Container className="my-4">
        <h1 className="text-center">Gestion des vidéos</h1>

          <a  className="lien-video" href="/ajouter-video">Télécharger une nouvelle vidéo ?</a>

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
          <Button variant="light" style={{ fontSize: '1.5rem' }}>{'<'}</Button>
          <Row className="flex-grow-1">
            {filteredVideos.map(video => (
              <Col key={video.id} md={3} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={video.image} />
                  <Card.Body>
                    <Card.Text>
                      <strong>ID :</strong> {video.id}<br />
                      <strong>Titre :</strong> {video.titre}<br />
                      <strong>Catégorie :</strong> {video.categorie}<br />
                      <strong>Auteur :</strong> {video.auteur}<br />
                      <div style={{ marginTop: '10px' }}>
                        <a href="#">Modifier ?</a><br />
                        <a href="#">Supprimer ?</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant="light" style={{ fontSize: '1.5rem' }}>{'>'}</Button>
        </div>
      </Container>
      <FooterAdmin />
    </>
  );
};

export default GestionVideos;
