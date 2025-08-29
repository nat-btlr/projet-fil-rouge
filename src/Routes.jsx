import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import HomePublic from './components/HomePublic/HomePublic'
import PageVideoInfo from './components/PageVideoInfo/PageVideoInfo';
import Error404 from './components/Error404/Error404';

import PageCompte from './components/Compte/Compte';
import ModifInfo from './components/ModifInfo/ModifInfo';
import Connexion from './components/Connexion/Connexion';
import Contact from './components/Contact/Contact';
import Inscription from './components/Inscription/Inscription';
import NavAdmin from './components/NavAdmin/NavAdmin';
import FooterAdmin from './components/FooterAdmin/footeradmin';
import HomeDashboard from './components/HomeDashboard/homedashboard';
import GestionCommentaires from './components/GestionCommentaires/GestionCommentaires';
import GestionMembres from './components/GestionMembres/GestionMembres';
import GestionVideos from './components/GestionVideos/GestionVideos';
import AjouterVideo from './components/AjouterVideo/AjouterVideo';
import ModifVideo from './components/ModifierVideo/ModifVideo'; 
import VideoCategorieSante from './components/CategoriesVideos/VideoSante/VideoCategorieSante'; 
import VideoCategoriePreparation from './components/CategoriesVideos/VideoPreparation/VideoCategoriePreparation';
import VideoCategorieCosmetique from './components/CategoriesVideos/VideoCosmetique/VideoCategorieCosmetique';
import VideoCategorieEcologie from './components/CategoriesVideos/VideoEcologie/VideoCategorieEcologie';
import Footer from './components/Footer/Footer';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route index element={<HomePublic />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/pagevideoinfo" element={<PageVideoInfo />} />
      <Route path="/homeauth" element={<Home />} />
      <Route path="/videocategoriesante" element={<VideoCategorieSante />} />
      <Route path="/videocategoriepreparation" element={<VideoCategoriePreparation />} />
      <Route path="/videocategoriecosmetique" element={<VideoCategorieCosmetique />} />
      <Route path="/videocategorieecologie" element={<VideoCategorieEcologie />} />
      <Route path="/compte" element={<PageCompte />} />
      <Route path="/modifinfo" element={<ModifInfo />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/navadmin" element={<NavAdmin />} />
      <Route path="/footeradmin" element={<FooterAdmin />} />
      <Route path="/homedashboard" element={<HomeDashboard />} />
      <Route path="/gestion-videos" element={<GestionVideos />} />
      <Route path="/gestion-membres" element={<GestionMembres />} />
      <Route path="/gestion-commentaires" element={<GestionCommentaires />} />
      <Route path="/ajouter-video" element={<AjouterVideo />} />
      {/* verifier s'il faut garder les 2 path ou pas  */}
      <Route path="/modifier-video" element={<ModifVideo />} />
      <Route path="/modifier-video/:id" element={<ModifVideo />} />

    </Routes>
  </Router>
);

export default RoutesConfig;