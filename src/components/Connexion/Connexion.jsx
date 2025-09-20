import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import './Connexion.css';
import Navigation from '../Navigation/Nav';
import Footer from "../Footer/Footer";

const Connexion = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const login = async (e) => {
    e.preventDefault();

    const ExistingUser = { email, password };
    
    try {
      const response = await axios.post(`${apiUrl}/public/login`, ExistingUser);
      if (response.status === 200) {
        console.log("User found.")

        const userData = {
          token: response.data.token,  
          username: response.data.username,    
          email: response.data.email   
        };

        localStorage.setItem("user", JSON.stringify(userData));
        
        setEmail("");
        setPassword("");
        setErrorMessage(""); 

        navigate("/homeauth");
      }
    } catch (error) {
      console.error("The user has not been found", error);
      setErrorMessage("Aucun utilisateur trouvé avec cet e-mail."); 
    }
  };

  return (
    <div className="connexion-page">
      <Navigation />
      <h1 className='titreConnecter'>Se Connecter</h1>
      <div className="form-container-connexion">
        <Form className='form-connexion' onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          {errorMessage && <div className="error-message">{errorMessage}</div>} 

          <div className="connexionContainer">
            <Button className="buttonForm" type="submit">Connexion</Button>
          </div>

          <div className="creationContainer">
            <p id="textConnection">Pas de compte ?</p>
            <Button className="buttonForm">
              <Link to="/inscription">Créer un compte</Link>
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Connexion;
