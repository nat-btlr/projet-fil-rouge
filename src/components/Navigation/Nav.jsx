import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar
} from 'react-bootstrap';

import './nav.css';
import logo from './logo.png';

const Navigation = () => (
  <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand className='navLogo'>
        <Link to="/">
          <img src={logo} alt="Logo Futures Mamans"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link>
            <Link to="/">Accueil</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/videocategorysante">Santé</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Préparation</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Cosmétique</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Ecologie</Link>
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Rechercher une vidéo" className="me-2" aria-label="Search" />
          <Button id="boutonRechercher">Rechercher</Button>
        </Form>
        <Link to="/compte">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff28e" d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        </Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
