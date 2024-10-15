import './style.css';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const InfoCompte = () => (
  <Container className='conteneur-infocompte'>
    <h3>Mon compte FUTURES MAMANS</h3>
    <Row>
    <Col sm={8}>Madame NOM Prénom</Col>
    <Col sm={4} className='lienmodif'><Link to="/modifinfo">Modifier mes informations &gt;</Link></Col>
    <Col sm={8}>Adresse : 4 rue Claude Debussy 93120 LA COURNEUVE</Col>
    <Col sm={8}>Téléphone fixe : 01 00 00 00 00</Col>
    <Col sm={8}>Téléphone portable : 01 00 00 00 00</Col>
    <Col sm={8}>E-mail : maman@gmail.com</Col>
    <Col sm={8}>Mot de passe : *******</Col>
    <Col sm={8}>Pseudo : supermum</Col>
    </Row>
  </Container>
);

export default InfoCompte;
