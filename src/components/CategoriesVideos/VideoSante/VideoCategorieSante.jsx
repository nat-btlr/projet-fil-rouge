import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer';
import './VideoCategorieSante.css';
import Carrousel from '../../Carrousel/Carrousel';

const VideoCategorieSante = () => (
  <>
    <Navigation />
    <h1 className="titreSante">Santé</h1>
    <Carrousel className="carrouselSante"/>
    <Footer />
    </>
);

export default VideoCategorieSante;
