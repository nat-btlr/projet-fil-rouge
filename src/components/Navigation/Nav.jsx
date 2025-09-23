import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

import './Nav.css';
import logo from './logo.png';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showNoResultsPopup, setShowNoResultsPopup] = useState(false);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL; // URL de ton backend

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const handleLinkClick = (e, to) => {
    if (!isLoggedIn && to.includes('video')) {
      e.preventDefault();
      navigate('/connexion');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get(`${apiUrl}/public/search`, {
        params: { query: searchQuery }
      });

      const videos = response.data;

      if (!videos || videos.length === 0) {
        setShowNoResultsPopup(true);
        setResults([]);
        setTimeout(() => setShowNoResultsPopup(false), 2000);
      } else {
        setResults(videos);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      setResults([]);
      setShowNoResultsPopup(true);
      setTimeout(() => setShowNoResultsPopup(false), 2000);
    }
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className='navLogo' as={Link} to="/">
            <img src={logo} alt="Logo Futures Mamans" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/homeauth">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriesante" onClick={(e) => handleLinkClick(e, '/videocategoriesante')}>Santé</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriepreparation" onClick={(e) => handleLinkClick(e, '/videopreparation')}>Préparation</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriecosmetique" onClick={(e) => handleLinkClick(e, '/videocosmetique')}>Cosmétique</Nav.Link>
              <Nav.Link as={Link} to="/videocategorieecologie" onClick={(e) => handleLinkClick(e, '/videoecologie')}>Ecologie</Nav.Link>
            </Nav>

            {isLoggedIn && (
              <>
                <Form className="d-flex" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    placeholder="Rechercher une vidéo"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button id="boutonRechercher" type="submit">Rechercher</Button>
                </Form>
                <Nav.Link as={Link} to="/compte" className="ms-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#fff28e" d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
                  </svg>
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Résultats de recherche */}
      {results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map(video => (
              <li key={video.id}>
                <Link to={`/video/${video.id}`}>
                  {video.titre} - <em>{video.categorie}</em>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pop-up "aucun résultat" */}
      {showNoResultsPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Aucun résultat trouvé pour "{searchQuery}"</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
