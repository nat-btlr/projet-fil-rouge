import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './NavAdmin.css'; 
import logo from '../Images/logo.png'; 

const NavAdmin = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setAdmin(JSON.parse(storedUser)); // si "user" est un objet
      } catch (e) {
        setAdmin(storedUser); // si "user" est juste une string
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAdmin(null);
    navigate("/");
  };

  const handleLinkClick = (e, to) => {
    if (!admin && (to.includes('video') || to.includes('preparation'))) {
      e.preventDefault();
      navigate('/connexion');
    }
  };

  return (
    <Navbar className="navbar-admin" expand="lg">
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
            {/* Déconnexion */}
            <Nav.Link onClick={handleLogout} className="logout-link">
              Déconnexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavAdmin;
