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
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).{8,20}$/;

  const addUser = async (e) => {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Le mot de passe doit contenir entre 8 et 20 caractères, avec au moins une lettre et un caractère spécial."
      );
      return;
    }

    const newUser = { email, password, username, gender };

    try {
      await axios.post(`${apiUrl}/public/subscribe`, newUser);

      setSuccessMessage("Compte créé avec succès !");
      setShowSuccessPopup(true);
      setErrorMessage("");

      // Retirer le setTimeout pour que le pop-up reste visible pendant le design
      // setTimeout(() => {
      //   setShowSuccessPopup(false);
      //   navigate("/connexion");
      // }, 2000);

      setEmail("");
      setPassword("");
      setUsername("");
      setGender("");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);

      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message || "Pseudo ou email déjà utilisé.");
      } else {
        setErrorMessage("Erreur serveur. Veuillez réessayer plus tard.");
      }
    }
  };

  return (
    <>
      <Navigation />
      <h1 className="titreConnecter">Créer un compte</h1>

      <div className="form-container-connexion">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

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
            <Form.Text className="text-muted">
              8–20 caractères, au moins une lettre et un caractère spécial.
            </Form.Text>
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
                checked={gender === "Femme"}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">Femme</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Homme"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Homme"}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">Homme</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="Ne se prononce pas"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Ne se prononce pas"}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">Ne se prononce pas</label>
            </div>
          </Form.Group>

          <div className="creationContainer">
            <Button className="buttonForm" type="submit">Créer un compte</Button>
          </div>

          <div className="creationContainer">
            <p id="textConnection">Déjà un compte ?</p>
            <Link to="/connexion"><Button className="buttonForm">Se connecter</Button></Link>
          </div>
        </Form>
      </div>

      {/* Pop-up stylé comme GestionVideos */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{successMessage}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Inscription;
