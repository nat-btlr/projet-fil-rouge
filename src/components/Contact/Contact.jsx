import React, { useState } from 'react';
import './Contact.css';
import {
  Button,
  Form,
  InputGroup,
  Row,
  Col
} from 'react-bootstrap';

import Navigation from '../Navigation/Nav';
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    sujet: '',
    message: '',
    file: null,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let newValue;

    if (type === 'checkbox') {
      newValue = checked;
    } else if (type === 'file') {
      newValue = files[0] || null;
    } else {
      newValue = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.username) newErrors.username = 'Pseudo requis';
    if (!formData.sujet) newErrors.sujet = 'Sujet requis';
    if (!formData.message) newErrors.message = 'Message requis';
    if (!formData.terms) newErrors.terms = 'Vous devez accepter les conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      setSuccessMessage("Votre message a bien été envoyé ✅");
      setFormData({
        email: '',
        username: '',
        sujet: '',
        message: '',
        file: null,
        terms: false
      });
    }
  };

  return (
    <>
      <Navigation />

      <h1 className="titreConnecter">Formulaire de Contact</h1>

      <div className="form-container-connexion">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <Form className="form-connexion" noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="username">
              <Form.Label>Pseudo</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Pseudo"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="7" controlId="email" className="position-relative">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="sujet">
            <Form.Label>Sujet du message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sujet du message"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              isInvalid={!!errors.sujet}
            />
            <Form.Control.Feedback type="invalid">
              {errors.sujet}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message :</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3" controlId="file">
            <Form.Label>Fichier (facultatif) :</Form.Label>
            <Form.Control type="file" name="file" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="position-relative mb-3" controlId="terms">
            <Form.Check
              required
              name="terms"
              label="J’accepte que mes données soient utilisées pour traiter ma demande."
              onChange={handleChange}
              checked={formData.terms}
              isInvalid={!!errors.terms}
            />
            <Form.Control.Feedback type="invalid">
              {errors.terms}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="creationContainer">
            <Button className="buttonForm" type="submit">Envoyer</Button>
          </div>
        </Form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
