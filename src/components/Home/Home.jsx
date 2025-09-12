import React from 'react';

import Navigation from '../Navigation/Nav';
import photoAccueil from '../Images/pexels_12.jpg';
import Carrie from '../Carrie/Carrie';
import Minnie from '../Minnie/Minnie';
import Footer from "../Footer/Footer";

import './Home.css';

const Home = () => (
  <>
    <div id="fond">
    <Navigation />
    <div className="welcomeWords">
      <img src={photoAccueil} alt="Accueil" id="pexels"/>
      <h1 className="main-h1">Bienvenue sur la plateforme Futures Mamans !</h1>
      <p className='desc'>Bonjour USERNAME! Nous sommes heureuses à vous accueillir sur notre plateforme bla bla lalala.</p>
    </div>
    <Footer />
    </div>
  </>
);

export default Home;
