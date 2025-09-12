import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => (
  <>
    <div id="monFooter">
      <p className='copyright'>Projet Fil Rouge du Groupe 3 de la Promo Gladys des Descodeuses.</p>
      <Link to="/contact">Contact</Link>
    </div>
  </>
);

export default Footer;
