import React from 'react';
import Navigation from '../../Navigation/Nav';
import Footer from '../../Footer/Footer';
import './VideoCategorieCosmetique.css';
import Carrousel from '../../Carrousel/Carrousel';
import { CATEGORIES } from '../../../constants/categories';

const VideoCategorieCosmetique = () => (
  <>
    <Navigation />
    <h1 className="titreCosmetique">Cosmétique</h1>
    <Carrousel 
      categoryName={CATEGORIES.COSMETICS} 
      className="carrouselCosmetics"
    />
    <Footer />
  </>
);

export default VideoCategorieCosmetique;