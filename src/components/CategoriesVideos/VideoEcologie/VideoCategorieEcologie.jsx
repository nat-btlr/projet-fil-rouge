import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategorieEcologie.css';
import Carrousel from '../../Carrousel/Carrousel';

const VideoCategorieEcologie = () => (
  <>
    <Navigation />
    <h1 className="titreEcologie">Écologie</h1>
    <Carrousel className="carrouselEcologie"/>
    <Footer />
    </>
);

export default VideoCategorieEcologie;
