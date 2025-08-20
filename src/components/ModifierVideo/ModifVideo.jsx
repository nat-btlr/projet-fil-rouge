import React, { useState } from 'react';
import { Form, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import NavAdmin from '../NavAdmin/NavAdmin';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import './ModifVideo.css'; 

const ModifVideo = () => {
  const [formData, setFormData] = useState({
    titre: '',
    categorie: '',
    auteur: '',
    description: '',
    fichier: null
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? (files[0] || null) : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.titre) newErrors.titre = 'Titre requis';
    if (!formData.categorie) newErrors.categorie = 'Catégorie requise';
    if (!formData.auteur) newErrors.auteur = 'Auteur requis';
    if (!formData.description) newErrors.description = 'Description requise';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Vidéo modifiée :', formData);
      setSuccessMessage("La vidéo a bien été modifiée ✅");
    }
  };

  return (
    <>
    <div className="modif-conteneur">
      <NavAdmin />
      <Container className="page-content my-4">
      <h1 className="titreConnecter">Modifier une Vidéo</h1>

      <div className="form-conteneur">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <Form className="form-uniforme" noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="titre">
              <Form.Label>Titre</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Titre de la vidéo"
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  isInvalid={!!errors.titre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.titre}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="categorie">
              <Form.Label>Catégorie</Form.Label>
              <Form.Control
                type="text"
                placeholder="Catégorie"
                name="categorie"
                value={formData.categorie}
                onChange={handleChange}
                isInvalid={!!errors.categorie}
              />
              <Form.Control.Feedback type="invalid">
                {errors.categorie}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="auteur">
            <Form.Label>Auteur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de l’auteur"
              name="auteur"
              value={formData.auteur}
              onChange={handleChange}
              isInvalid={!!errors.auteur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.auteur}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Description de la vidéo"
              name="description"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="fichier">
            <Form.Label>Changer la vidéo (optionnel)</Form.Label>
            <Form.Control
              type="file"
              name="fichier"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="creationContainer">
            <Button className="buttonForm" type="submit">
              Enregistrer les modifications
            </Button>
          </div>
        </Form>
      </div>
      </Container>
</div>
      <FooterAdmin />
    </>
  );
};

export default ModifVideo;