import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import HomePublic from './components/HomePublic/HomePublic';
import PageVideoInfo from './components/PageVideoInfo/PageVideoInfo';
import Error404 from './components/Error404/Error404';

import PageCompte from './components/Compte/Compte';
import ModifInfo from './components/ModifInfo/ModifInfo';
import Connexion from './components/Connexion/Connexion';
import Contact from './components/Contact/Contact';
import Inscription from './components/Inscription/Inscription';
import NavAdmin from './components/NavAdmin/NavAdmin';
import FooterAdmin from './components/FooterAdmin/FooterAdmin';
import HomeDashboard from './components/HomeDashboard/HomeDashboard';
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

import PrivateRoute from './components/PrivateRoute';

const RoutesConfig = () => (
  <Router>
    <Routes>
      {/* Routes publiques - accessibles à tous (visiteurs) */}
      <Route path="/" element={<HomePublic />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />

      {/* Routes accessibles aux membres et admins */}
      <Route path="/compte" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <PageCompte />
        </PrivateRoute>
      } />
      <Route path="/modifinfo" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <ModifInfo />
        </PrivateRoute>
      } />

      {/* Pages vidéos accessibles aux membres et admins */}
      <Route path="/video/:id" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <PageVideoInfo />
        </PrivateRoute>
      } />
      <Route path="/videocategoriesante" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <VideoCategorieSante />
        </PrivateRoute>
      } />
      <Route path="/videocategoriepreparation" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <VideoCategoriePreparation />
        </PrivateRoute>
      } />
      <Route path="/videocategoriecosmetique" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <VideoCategorieCosmetique />
        </PrivateRoute>
      } />
      <Route path="/videocategorieecologie" element={
        <PrivateRoute allowedRoles={["MEMBER", "ADMIN"]}>
          <VideoCategorieEcologie />
        </PrivateRoute>
      } />

      {/* Dashboard et gestion admin uniquement */}
      <Route path="/homedashboard" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <HomeDashboard />
        </PrivateRoute>
      } />
      <Route path="/gestion-videos" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <GestionVideos />
        </PrivateRoute>
      } />
      <Route path="/gestion-membres" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <GestionMembres />
        </PrivateRoute>
      } />
      <Route path="/gestion-commentaires" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <GestionCommentaires />
        </PrivateRoute>
      } />
      <Route path="/ajouter-video" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <AjouterVideo />
        </PrivateRoute>
      } />
      <Route path="/modifier-video/:id" element={
        <PrivateRoute allowedRoles={["ADMIN"]}>
          <ModifVideo />
        </PrivateRoute>
      } />

      {/* Composants additionnels (nav/footer) */}
      <Route path="/navadmin" element={<NavAdmin />} />
      <Route path="/footeradmin" element={<FooterAdmin />} />
      <Route path="/footer" element={<Footer />} />

      {/* Route 404 pour toutes les autres URLs */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
