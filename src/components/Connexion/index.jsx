import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import './style.css';
import Navigation from '../Navigation/Nav';
import Footer from '../Footer';

const Connexion = () => {
  // Creating hooks for managinf the state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Creating a link to the endpoint for logging in using the url from the backend
  const apiUrlConnect = "http://localhost:8080/public/login";

  const login = async (e) => {
    e.preventDefault();

    const ExistingUser = {
      email: email,
      password: password,
    };

    try {
      await axios.post(apiUrlConnect, ExistingUser);
      console.log("User found.");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("The user has not beed found", error);
    }
  };

  return (
  <>
    <Navigation />
    <div className="form-container">
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
          <h1>Se Connecter</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Entrer votre email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rester connecté-e" />
          </Form.Group>
          <div className="connexionContainer">
              <Button className="buttonForm" type="submit">Connexion</Button>
            <Form.Label>(Mot de passe oublié ?)</Form.Label>
          </div>
          <div className="creationContainer">
            <p id="textConnection">Pas de compte ?</p>
            <Button className="buttonForm"><Link to="/inscription">Créer un compte</Link></Button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  )
};
export default Connexion;