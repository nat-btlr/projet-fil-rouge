import React from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import './style.css';
import CarrouselMembres from '../CarrouselMembres/CarrouselMembres';
import FooterAdmin from '../FooterAdmin/footeradmin';
import { Button, Form } from 'react-bootstrap';


const GestionMembres = () => (
    <>
      <NavAdmin />
      <div className='container-gestion-membres'>
        <h1>Gestion des Membres</h1>
        <div className='container-gestion'>
          <div id='rech'>
            <h5>Rechercher un membre :</h5>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Rechercher un membre"
                className="me-2"
                aria-label="Search"
              />
              <Button id="boutonRechercher">Rechercher</Button>
            </Form>
          </div>
        </div>
        <CarrouselMembres />
      </div>
      <FooterAdmin />
    </>
  );

export default GestionMembres;

