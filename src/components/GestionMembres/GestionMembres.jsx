// GestionMembres.jsx
import React, { useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import './GestionMembres.css';
import CarrouselMembres from '../CarrouselMembres/CarrouselMembres';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import { Button, Form } from 'react-bootstrap';
import Profil from '../Images/profil.png';

const GestionMembres = () => {
  const allMembres = [
    { id: '001', pseudo: 'MamanCool', email: 'maman1@mail.com', imageUrl: Profil },
    { id: '002', pseudo: 'MamanZen', email: 'zen@maman.com', imageUrl: Profil },
    { id: '003', pseudo: 'MamanSereine', email: 'sereine@mail.com', imageUrl: Profil },
    { id: '004', pseudo: 'MamanActive', email: 'active@mail.com', imageUrl: Profil },
    { id: '005', pseudo: 'MamanZen', email: 'zen2@maman.com', imageUrl: Profil },
    { id: '006', pseudo: 'MamanCool', email: 'cool2@maman.com', imageUrl: Profil }
  ];

  const [search, setSearch] = useState('');
  const [filteredMembres, setFilteredMembres] = useState(allMembres);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = allMembres.filter(membre =>
      membre.pseudo.toLowerCase().includes(value.toLowerCase()) ||
      membre.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMembres(filtered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // empêcher le rechargement
  };

  return (
    <>
      <NavAdmin />
      <h1 className='titre-gestion-membres'>Gestion des Membres</h1>
      <div className='container-gestion-membres'>
        <div className='container-gestion'>
          <div id='rech'>
            <h5>Rechercher un membre :</h5>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Rechercher un membre"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
              <Button id="boutonRechercher" type="submit">Rechercher</Button>
            </Form>
          </div>
        </div>

        <CarrouselMembres membres={filteredMembres} />
      </div>
      <FooterAdmin />
    </>
  );
};

export default GestionMembres;
