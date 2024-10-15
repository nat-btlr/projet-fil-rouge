import React from 'react';
import Link from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';
import Navigation from '../Navigation/Nav';

const Connexion = () => (
<>
  <Navigation />
  <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <h1>Se Connecter</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrer votre mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Rester connecté-e" />
        </Form.Group>
        <div className="connexionContainer">
            <Button className="buttonForm" type="submit">Connexion</Button>
          <Form.Label>Mot de passe oublié ?</Form.Label>
        </div>
        <div className="creationContainer">
          <p id="textConnection">Pas de compte ?</p>
          <Button className="buttonForm"><Link to="/inscription">Créer un compte</Link></Button>
        </div>
      </Form>
    </div>
  </>
);
export default Connexion;
