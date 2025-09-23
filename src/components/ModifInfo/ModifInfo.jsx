import { useState } from 'react';
import axios from 'axios';
import './ModifInfo.css';
import {
  Container,
  Button,
  InputGroup,
  Form,
  Col
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Nav';
import Footer from "../Footer/Footer";

const ModifInfo = () => {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    currentEmail: '',
    newUsername: '',
    newEmail: '',
    newPassword: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); // "success" ou "error"

  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.querySelector('form');

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.put(`${apiUrl}/api/updateuser`, formData);
      if (response.status === 200) {
        // Pop-up de succès
        setPopupMessage("Vos informations ont été modifiées avec succès !");
        setPopupType("success");
        setShowPopup(true);

        const updatedUser = {
          ...JSON.parse(localStorage.getItem("user")),
          username: formData.newUsername,
          email: formData.newEmail
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        setTimeout(() => {
          setShowPopup(false);
          navigate('/compte');
        }, 2000);
      }
    } catch (error) {
      console.error('Erreur lors de la modification des informations:', error);

      // Pop-up d'erreur
      setPopupMessage("Une erreur est survenue. Veuillez réessayer.");
      setPopupType("error");
      setShowPopup(true);

      // Masquer le pop-up après 3 secondes
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <>
      <Navigation />
      <Container className='compteModif'>
        <h1 className='titre-modif'>Mon Compte</h1>
        <h2 className='titre-modif'>Modifier mes informations</h2>
        <Container className='conteneur-modif'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className='change-mail'>
              <Form.Group as={Col} md="10" controlId="validationCurrentEmail">
                <Form.Label className="titreLabel">Email actuel</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-mail actuel"
                  required
                  name="currentEmail"
                  value={formData.currentEmail}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Merci de renseigner l&apos;adresse email actuelle.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" controlId="validationUsername">
                <Form.Label className="titreLabel">Pseudo</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Pseudo"
                    required
                    name="newUsername"
                    value={formData.newUsername}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Merci de choisir un nom d&apos;utilisateur.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="10" controlId="validationEmail">
                <Form.Label className="titreLabel">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nouveau e-mail"
                  required
                  name="newEmail"
                  value={formData.newEmail}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Merci de renseigner un email valide.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="10" controlId="validationMdp">
                <Form.Label className="titreLabel">Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  required
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Merci d&apos;entrer un mot de passe valide.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form>
        </Container>

        <Container className='espace-btn'>
          <Button type="submit" onClick={handleSubmit} className='btn-valider lien-gras'>
            VALIDER
          </Button>
          <Button className="lien-gras">
            <Link to="/compte">Retour</Link>
          </Button>
        </Container>
      </Container>

      {/* Pop-up succès ou erreur */}
      {showPopup && (
        <div className="popup-overlay">
          <div className={`popup-content ${popupType === "error" ? "popup-error" : ""}`}>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ModifInfo;
