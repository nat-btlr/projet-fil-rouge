import React from 'react';

import Navigation from '../Navigation/Nav';
import photoAcceuil from '../Images/pexels_12.jpg';
import Carrie from '../Carrie/Carrie';
import Minnie from '../Minnie/Minnie';
import Footer from '../Footer';

import './home.css';

const Home = () => (
  <>
    <div id="fond">
    <Navigation />
    <div className="welcomeWords">
      <img src={photoAcceuil} alt="Accueil" id="pexels"/>
      <h1 className="main-h1">Bienvenue sur la plateforme Futures Mamans !</h1>
      <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <Carrie />
      <div className='mesCarrousels'>
        <Minnie />
        <Minnie />
      </div>
    <Footer />
    </div>
  </>
);

export default Home;
