import { useState } from 'react';
import './style.css';
import {
  Container,
  Button,
  InputGroup,
  Form,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Nav';

const ModifInfo = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const formulaire = event.currentTarget;
    if (formulaire.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Navigation />
      <Container>
        <h1>Mon Compte</h1>
        <h2>Modifier mes informations</h2>
        <Container className='conteneur-modifcompte'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className='change-mail'>
              <Form.Group as={Col} md="10" controlId="validationPseudo">
                <Form.Label class="titreLabel">Pseudo</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="text" placeholder="Pseudo" aria-describedby="inputGroupPrepend" required />
                  <Form.Control.Feedback type="invalid">
                    Merci de choisir un pseudonyme.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="10" controlId="validationEmail">
                <Form.Label class="titreLabel">Email</Form.Label>
                <Form.Control type="email" placeholder="E-mail" required />
                <Form.Control.Feedback type="invalid">
                  Merci de renseigner une adresse email valide.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="10" controlId="validationMdp">
                <Form.Label class="titreLabel">Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" required />
                <Form.Control.Feedback type="invalid">
                  Merci d'entrer un mot de passe valide.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form>
        </Container>
        <Container className='space-btn'>
          <Button className='btn-valider bold-link' type="submit">VALIDER</Button>
          <Button className="bold-link"><Link to="/compte">Retour</Link></Button>
        </Container>
      </Container>
    </>
  );
};

export default ModifInfo;
