import React from 'react';

import Navigation from '../Navigation/Nav';
import photoAccueil from '../Images/pexels_12.jpg';
import Footer from "../Footer/Footer";

import './Home.css';

const Home = () => (
  <>
    <div id="fond">
      <Navigation />
      <div className="welcomeWords">
        <img src={photoAccueil} alt="Accueil" id="pexels"/>
        <div className="welcomeOverlay">
          <h1 className="main-h1">Bienvenue sur la plateforme Futures Mamans !</h1>
          <p className='desc'>Nous sommes heureuses à vous accueillir sur notre plateforme.</p>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;