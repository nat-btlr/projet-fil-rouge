import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategorieEcologie.css';
import Carrousel from '../../Carrousel/Carrousel';
import { CATEGORIES } from '../../../constants/categories';

const VideoCategorieEcologie = () => (
  <>
    <Navigation />
    <h1 className="titreEcologie">Écologie</h1>
    <Carrousel 
      categoryName={CATEGORIES.ECOLOGY} 
      className="carrouselEcology"
    />
    <Footer />
  </>
);

export default VideoCategorieEcologie;