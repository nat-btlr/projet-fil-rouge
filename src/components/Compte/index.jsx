import Navigation from '../Navigation/Nav';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Footer from '../Footer/index'

import './style.css';

const PageCompte = () => (
  <>
    <Navigation />
    <Container className='corpsCompte'>
      <h1>Mon Espace Compte</h1>
      <Container className='conteneur-infocompte'>
        <div class="headline">
          <h3>Bienvenue USERNAME</h3>
          <p className='lienmodif'><Link to="/modifinfo">Modifier mes informations &gt;</Link></p>
        </div>
        <p>E-mail : email@email.com</p>
        <p>Mot de passe : *******</p>
      </Container>
      <Button className="buttonSupprimer">Supprimer mon compte Futures Mamans</Button>
    </Container>
    {/* <Footer /> */}
  </>
);

export default PageCompte;
