import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Inscription.css"; 
import Navigation from "../Navigation/Nav";
import Footer from "../Footer/Footer";

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const addUser = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
      username: username,
      gender: gender,
    };

    try {
      await axios.post(`${apiUrl}/public/subscribe`, newUser);
      console.log("User added.");

      setSuccessMessage("Compte créé avec succès !");
      setTimeout(() => {
        navigate("/connexion");
      }, 2000);

      setEmail("");
      setPassword("");
      setUsername("");
      setGender("");
    } catch (error) {
      console.log("Error while adding a user", error);
    }
  };

  return (
    <>
      <Navigation />
      <h1 className="titreConnecter">Créer un compte</h1>

      <div className="form-container-connexion">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        
        <Form className="form-connexion" onSubmit={addUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Pseudo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer votre pseudo"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRadio">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Femme"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Femme
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Homme"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Homme
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="Ne se prononce pas"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Ne se prononce pas
              </label>
            </div>
          </Form.Group>

          <div className="creationContainer">
            <Button className="buttonForm" type="submit">
              Créer un compte
            </Button>
          </div>

          <div className="creationContainer">
            <p id="textConnection">Déjà un compte ?</p>
            <Button className="buttonForm">
              <Link to="/connexion">Se connecter</Link>
            </Button>
          </div>
        </Form>
      </div>
      
      <Footer />
    </>
  );
};

export default Inscription;
