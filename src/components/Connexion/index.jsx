import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import './style.css';
import Navigation from '../Navigation/Nav';
import Footer from '../Footer';

const Connexion = () => {
  // Creating hooks for managing the state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // New state for error message

  const navigate = useNavigate();

  // Creating a link to the endpoint for logging in using the URL from the backend
  const apiUrl = import.meta.env.VITE_API_URL;

  const login = async (e) => {
    e.preventDefault();

    const ExistingUser = {
      email: email,
      password: password,
    };
    
    try {
      const response = await axios.post(`${apiUrl}/public/login`, ExistingUser);
      if (response.status === 200) {
        console.log("User found.")

        const userData = {
          token: response.data.token,  // Token if it comes in the response
          username: response.data.username,    // Username if it exists in the response
          email: response.data.email   // User email
        };

        localStorage.setItem("user", JSON.stringify(userData));
        console.log("USER: " + localStorage.getItem("user"));
        
        setEmail("");
        setPassword("");
        setErrorMessage(""); // Clear the error message on successful login

        navigate("/homeauth");
      }
    } catch (error) {
      console.error("The user has not been found", error);
      setErrorMessage("Aucun utilisateur trouvé avec cet e-mail."); // Set the error message
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
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message if it exists */}
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
  );
};

export default Connexion;
