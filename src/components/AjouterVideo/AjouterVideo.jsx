import React, { useState } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import FooterAdmin from '../FooterAdmin/footeradmin';
import {
  Container,
  Button,
  Form
} from 'react-bootstrap';
import './style.css'; 

const AjouterVideo = () => {
  const [formData, setFormData] = useState({
    videoFile: null,
    videoId: '',
    titre: '',
    categorie: '',
    auteur: '',
    datePublication: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Ici tu peux envoyer les données au backend
  };

  return (
    <>
      <NavAdmin />
      <Container className="my-5">
        <h1>Ajouter une nouvelle vidéo</h1>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="videoFile" className="mb-3">
            <Form.Label>Nouvelle vidéo :</Form.Label>
            <Form.Control
              type="file"
              name="videoFile"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="videoId" className="mb-3">
            <Form.Label>ID vidéo</Form.Label>
            <Form.Control
              type="text"
              name="videoId"
              placeholder="ID vidéo"
              value={formData.videoId}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="titre" className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              name="titre"
              placeholder="Titre"
              value={formData.titre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="categorie" className="mb-3">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              type="text"
              name="categorie"
              placeholder="Catégorie"
              value={formData.categorie}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="auteur" className="mb-3">
            <Form.Label>Auteur</Form.Label>
            <Form.Control
              type="text"
              name="auteur"
              placeholder="Auteur"
              value={formData.auteur}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="datePublication" className="mb-3">
            <Form.Label>Date de publication</Form.Label>
            <Form.Control
              type="date"
              name="datePublication"
              value={formData.datePublication}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description" className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className='btn-enregistrer' type="submit">ENREGISTRER</Button>
        </Form>
      </Container>
      <FooterAdmin />
    </>
  );
};

export default AjouterVideo;
