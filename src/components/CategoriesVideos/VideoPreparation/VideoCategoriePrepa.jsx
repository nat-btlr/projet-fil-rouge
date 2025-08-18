import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer';
import './VideoCategoriePrepa.css';
import Carrousel from '../../Carrousel/Carrousel';

const VideoCategoriePreparation = () => (
  <>
    <Navigation />
    <h1 className="titrePreparation">Préparation</h1>
    <Carrousel className="carrouselPréparation"/>
    <Footer />
    </>
);

export default VideoCategoriePreparation;
