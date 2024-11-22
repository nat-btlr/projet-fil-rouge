import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../Connexion/style.css';
import Navigation from '../Navigation/Nav';
import Footer from '../Footer';

const Inscription = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  const apiUrlSubscribe = "http://localhost:8080/public/subscribe";

  const addUser = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
      username: username,
      gender: gender,
    };

    try {
      await axios.post(apiUrlSubscribe, newUser);
      console.log("User added.");

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
      <div className="form-container">
        <Form onSubmit={addUser}>
          <h1>Créer un compte</h1>
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
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Inscription;