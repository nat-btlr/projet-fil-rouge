import React from "react";
import { Container } from 'react-bootstrap';

import NavAdmin from "../NavigationAdmin/NavAdmin";
import GestionVideos from "../GestionVideos/GestionVideos";
import Footer from '../Footer/index'

import './panneauadmin.css'

const PanneauAdmin = () => (
  <>
    <div id="fond">
    <NavAdmin />
    <Container className="corpsPanneauAdmin">
      <h1>Mon Panneau d'Administration</h1>
      <GestionVideos />
    </Container>
    <Footer />
    </div>
  </>
);

export default PanneauAdmin;
