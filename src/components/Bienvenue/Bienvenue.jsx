import React from 'react';
import './style.css';
import {
  Container
} from 'react-bootstrap';

const Bienvenue = () => (
  <Container>
    <h1 className='montitre'>Mon Compte</h1>
    <h2 className='welcome'>Bienvenue <span className='identite'>prenom nom</span></h2>
    <h3 className='n-abonne'>№ de compte : 24456777</h3>
  </Container>
);

export default Bienvenue;
