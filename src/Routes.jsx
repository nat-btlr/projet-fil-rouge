import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import HomePublic from './components/HomePublic/HomePublic'
import PageVideoInfo from './components/PageVideoInfo/index';
import Error404 from './components/Error404';
import VideoCategorySante from './components/VideoCategories/VideoCategory';
import PageCompte from './components/Compte/index';
import ModifInfo from './components/ModifInfo/index';
import Connexion from './components/Connexion/index';
import Contact from './components/Contact/index';
import Inscription from './components/Inscription/index';
import NavAdmin from './components/NavAdmin/NavAdmin';
import FooterAdmin from './components/FooterAdmin/footeradmin';
import HomeDashboard from './components/HomeDashboard/homedashboard';
import GestionCommentaires from './components/GestionCommentaires/GestionCommentaires';
import GestionMembres from './components/GestionMembres/GestionMembres';
import GestionVideos from './components/GestionVideos/GestionVideos';


const RoutesConfig = () => (
  <Router>
    <Routes>Sante
      <Route index element={<HomePublic />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/pagevideoinfo" element={<PageVideoInfo />} />
      <Route path="/homeauth" element={<Home />} />
      <Route path="/videocategorysante" element={<VideoCategorySante />} />
      <Route path="/compte" element={<PageCompte />} />
      <Route path="/modifinfo" element={<ModifInfo />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/videoadmin" element={<NavAdmin />} />
      <Route path="/membresadmin" element={<NavAdmin />} />
      <Route path="/commentairesadmin" element={<NavAdmin />} />
      <Route path="/navadmin" element={<NavAdmin />} />
      <Route path="/footeradmin" element={<FooterAdmin />} />
      <Route path="/homedashboard" element={<HomeDashboard />} />
      <Route path="/gestion-videos" element={<GestionVideos />} />
      <Route path="/gestion-membres" element={<GestionMembres />} />
      <Route path="/gestion-commentaires" element={<GestionCommentaires />} />
    </Routes>
  </Router>
);

export default RoutesConfig;