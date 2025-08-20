import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navigation from '../Navigation/Nav';
import photoAccueil from '../Images/pexels_12.jpg';
import Footer from '../Footer';

import './Homepublic.css';

const Home = () => (
  <>
    <div id="fond">
    <Navigation />
    <div className="welcomeWords">
      <img src={photoAccueil} alt="Accueil" id="pexels"/>
      <h1 className="main-h1">Bienvenue sur la plateforme Futures Mamans !</h1>
      <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className="welcomeButton" variant="outline-primary"><Link to="/connexion">Se connecter</Link></Button>{' '}
    </div>
    <Footer />
    </div>
  </>
);

export default Home;
