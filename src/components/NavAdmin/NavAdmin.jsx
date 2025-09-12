import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './NavAdmin.css'; 
import logo from '../Images/logo.png'; 

const NavAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); 
  }, []);

  const handleLinkClick = (e, to) => {
    if (!isLoggedIn && (to.includes('video') || to.includes('preparation'))) {
      e.preventDefault();
      navigate('/connexion');
    }
  };

  return (
    <Navbar className="navbar-admin" expand="lg" >
      <Container fluid>
        <Navbar.Brand className='navLogoAdmin'>
          <Link to="/homedashboard">
            <img src={logo} alt="Logo Futures Mamans" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/gestion-videos">
              Vidéos
            </Nav.Link>
            <Nav.Link as={Link} to="/gestion-membres" onClick={(e) => handleLinkClick(e, '/gestion-membres')}>
              Membres
            </Nav.Link>
            <Nav.Link as={Link} to="/gestion-commentaires" onClick={(e) => handleLinkClick(e, '/gestion-commentaires')}>
              Commentaires
            </Nav.Link>
          </Nav>
          <Link to="/compte">
                      <svg className="admin-connection"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#fff28e" d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
                      </svg>
                    </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavAdmin;
