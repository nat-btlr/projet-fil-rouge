import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

import './Nav.css';
import logo from './logo.png';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

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
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;
      const response = await axios.get(`${apiUrl}/api/search`, {
        params: { query: searchQuery },
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });

      const videos = response.data;

      setResults(videos);
      setShowDropdown(true);
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        setResults([]);
        setShowDropdown(true);
    }
  };

  const handleAccueilClick = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/homeauth');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className='navLogo' as={Link} to="/" onClick={handleAccueilClick}>
            <img src={logo} alt="Logo Futures Mamans" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/homeauth" onClick={handleAccueilClick}>Accueil</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriesante" onClick={(e) => handleLinkClick(e, '/videocategoriesante')}>Santé</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriepreparation" onClick={(e) => handleLinkClick(e, '/videopreparation')}>Préparation</Nav.Link>
              <Nav.Link as={Link} to="/videocategoriecosmetique" onClick={(e) => handleLinkClick(e, '/videocosmetique')}>Cosmétique</Nav.Link>
              <Nav.Link as={Link} to="/videocategorieecologie" onClick={(e) => handleLinkClick(e, '/videoecologie')}>Ecologie</Nav.Link>
            </Nav>

            {isLoggedIn && (
              <>
                <Form className="d-flex" onSubmit={handleSearch} style={{ position: "relative" }}>
                  <Form.Control
                    type="search"
                    placeholder="Rechercher une vidéo"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => results.length > 0 && setShowDropdown(true)}
                  />
                  <Button id="boutonRechercher" type="submit">Rechercher</Button>
                  {showDropdown && (
                    <div className="search-results-dropdown" ref={dropdownRef}>
                      {results.length === 0 ? (
                        <div className="search-no-results">Aucun résultat trouvé pour "{searchQuery}"</div>
                      ) : (
                        results.map((video, index) => (
                          <div
                            className="search-result-video"
                            key={video.id || index}
                            onClick={() => navigate(`/video/${video.id}`, { state: { url: video.url, title: video.title, description: video.description } })}
                          >
                            <video className="search-result-thumbnail" src={video.url} />
                            <div className="search-result-info">
                              <div className="search-result-title">{video.title || video.titre}</div>
                              {video.description && (
                                <div className="search-result-description">{video.description}</div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
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
    </>
  );
};

export default Navigation;