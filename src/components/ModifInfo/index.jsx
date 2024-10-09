import React from 'react';
import './style.css';
import {
  Button,
  Row,
  Col,
  Container
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Nav';

const ModifInfo = () => (
  <>
  <Navigation />
  <Container>
    <h1 className='montitre'>Mon Compte</h1>
    <h2 className='modif'>Modifier mes informations</h2>
    <h3 className='n-abonne'>№ de compte : 24456777</h3>
    <div className="button-genre-container">
      <Button className="buttonGenre" as="input" type="button" value="Madame"/>
      <Button className="buttonGenre" as="input" type="button" value="Monsieur"/>
      <Button className="buttonGenre" as="input" type="button" value="Ne se prononce pas"/>
    </div>
  </Container>
  <Container>
    <Row className="row-espace-client">
      <Col>Prénom</Col>
      <Col>Nom</Col>
    </Row>
    <Row className="row-espace-client">
      <Col>Adresse</Col>
      <Col>Code postal</Col>
      <Col>Ville</Col>
    </Row>
    <Row className="row-espace-client">
      <Col>Téléphone fixe</Col>
      <Col>Téléphone portable</Col>
    </Row>
    <Row className="row-espace-client">
      <Col>Pseudo</Col>
      <Col>Email</Col>
      <Col>Mot de passe</Col>
    </Row>
  </Container>
  <Container className='space-btn'>
    <Button className="bold-link"><Link to="/espaceclient">Retour</Link></Button>
    <Button className='btn-valider bold-link'>VALIDER</Button>
  </Container>
</>
);

export default ModifInfo;
