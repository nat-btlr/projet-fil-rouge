import React from 'react';
import { Link } from 'react-router-dom';


import {
  Button
} from 'react-bootstrap';

import Navigation from '../Navigation/Nav';
import photoAcceuil from '../Images/pexels_12.jpg';
// import Slider from '../Slider/Slider';
// import Carrousel1 from '../Carrousel';
// import Carrousel2 from '../Mini_Carrousel/MiniCarrousel';
import Carrie from '../Carrie/Carrie';
import Minnie from '../Minnie/Minnie';
import Footer from '../Footer';

import './home.css';

const Home = () => (
  <>
    <div id="fond">
    <Navigation />
    <div className="welcomeWords">
      <img src={photoAcceuil} alt="Acceuil" id="pexels"/>
      <h1 className="main-h1">Bienvenue sur la plateforme Futures Mamans !</h1>
      <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className="welcomeButton" variant="outline-primary"><Link to="/connexion">Se connecter</Link></Button>{' '}
    </div>
    {/* <Carousel /> */}
    {/* <Carrousel1 />
    <Carrousel2 /> */}
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
