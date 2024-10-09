import React from 'react';
import Navigation from '../Navigation/Nav';
import SousCategory from '../SousCategory/SousCategory';

const VideoCategorySante = () => (
  <>
    <Navigation />
    <h1>Santé</h1>
    <SousCategory titlecategory="Manger bien" />
    <SousCategory titlecategory="Examens de santé à ne pas manquer" />
    <SousCategory titlecategory="Dépression post-partum"/>
    <SousCategory titlecategory="Sport et grossesse"/>
  </>
);

export default VideoCategorySante;
