import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import PageVideoInfo from './components/PageVideoInfo/index';
import Error404 from './components/Error404';
import VideoCategorySante from './components/VideoCategories/VideoCategory';
import EspaceClient from './components/EspaceClient/index';
import ModifInfo from './components/ModifInfo/index';
import Connexion from './components/Connexion/index';
import Contact from './components/Contact';

const RoutesConfig = () => (
  <Router>
    <Routes>Sante
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/pagevideoinfo" element={<PageVideoInfo />} />
      <Route path="/videocategorysante" element={<VideoCategorySante />} />
      <Route path="/espaceclient" element={<EspaceClient />} />
      <Route path="/modifinfo" element={<ModifInfo />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
);

export default RoutesConfig;