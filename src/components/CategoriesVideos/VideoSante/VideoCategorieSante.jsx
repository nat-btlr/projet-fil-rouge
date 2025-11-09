import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategorieSante.css';
import Carrousel from '../../Carrousel/Carrousel';
import { CATEGORIES } from '../../../constants/categories';

const VideoCategorieSante = () => (
  <>
    <Navigation />
    <h1 className="titreSante">Santé</h1>
    <Carrousel 
      categoryName={CATEGORIES.HEALTH} 
      className="carrouselSante"
    />
    <Footer />
  </>
);

export default VideoCategorieSante;