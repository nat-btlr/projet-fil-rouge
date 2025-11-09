import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategoriePreparation.css';
import Carrousel from '../../Carrousel/Carrousel';
import { CATEGORIES } from '../../../constants/categories';

const VideoCategoriePreparation = () => (
  <>
    <Navigation />
    <h1 className="titrePreparation">Préparation</h1>
    <Carrousel 
      categoryName={CATEGORIES.PREPARATION} 
      className="carrouselPréparation"
    />
    <Footer />
  </>
);

export default VideoCategoriePreparation;