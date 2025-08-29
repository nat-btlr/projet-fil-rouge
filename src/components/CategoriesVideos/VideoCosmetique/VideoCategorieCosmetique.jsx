import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategorieCosmetique.css';
import Carrousel from '../../Carrousel/Carrousel';

const VideoCategorieCosmetique = () => (
  <>
    <Navigation />
    <h1 className="titreCosmetique">Cosmétique</h1>
    <Carrousel className="carrouselCosmetique"/>
    <Footer />
    </>
);

export default VideoCategorieCosmetique;
