import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';

import './navadmin.css';
import logo from '../Navigation/logo.png';

const NavAdmin = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className='navLogo'>
          <Link to="/">
            <img src={logo} alt="Logo Futures Mamans" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link>
              <Link to="/gestionvideo" onClick={(e) => handleLinkClick(e, '/videocategorysante')}>Gestion des Vidéos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gestionutilisateur">Gestion des Utilisateurs</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavAdmin;
