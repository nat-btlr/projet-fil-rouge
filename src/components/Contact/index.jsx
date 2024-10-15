import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {
  Container,
  Button,
  Form,
  InputGroup,
  Row,
  Col
} from 'react-bootstrap';

import Navigation from '../Navigation/Nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    file: null,
    terms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
      files
    } = e.target;
    let newValue;

    const [firstFile] = files;
    if (type === 'checkbox') {
      newValue = checked;
    } else if (type === 'file') {
      newValue = firstFile; // Utilisation de la valeur déstructurée
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

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.sujet) newErrors.sujet = 'Sujet is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.file) newErrors.file = 'File is required';
    if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <>
      <Navigation />
      <Container className='conteneur-contact'>
        <Container>
          <h1 className='montitre'>Formulaire de contact</h1>
        </Container>

        <Form className='contact-form' noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="username">
              <Form.Label>Pseudo</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Pseudo"
                  aria-describedby="inputGroupPrepend"
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

          <Row className="mb-3">
            <Form.Group as={Col} md="15" controlId="sujet" className="position-relative">
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
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="15"for controlId="message" className="position-relative">
              <Form.Label>Message :</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3" controlId="file">
            <Form.Label>Fichier (facultatif) :</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="position-relative mb-3" controlId="terms">
            <Form.Check
              required
              name="terms"
              label="J’accepte que mes données soient utilisées pour traiter ma demande."
              onChange={handleChange}
              isInvalid={!!errors.terms}
            />
            <Form.Control.Feedback type="invalid">
              {errors.terms}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className='env-contact' type="submit">ENVOYER</Button>
        </Form>

        <Container className='space-btn'>
          <Button className="bold-link">
            <Link to="/espaceclient" style={{ textDecoration: 'none', color: 'inherit' }}>
              Retour
            </Link>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Contact;