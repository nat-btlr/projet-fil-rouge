import { useState } from 'react';
import axios from 'axios';
import './style.css';
import {
  Container,
  Button,
  InputGroup,
  Form,
  Col
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Nav';
import Footer from '../Footer';

const ModifInfo = () => {
  const [validated, setValidated] = useState(false);

  // State for entering the data into the form
  const [formData, setFormData] = useState({
    currentEmail: '',
    newUsername: '',
    newEmail: '',
    newPassword: ''
  });

  // URL для изменения данных
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  // Функция для обновления состояния при изменении полей ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Отправка формы
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
        alert('Vos informations ont été modifiées avec succès.');

        // Updating localStorage with new data
        const updatedUser = {
          ...JSON.parse(localStorage.getItem("user")),
          username: formData.newUsername,
          email: formData.newEmail
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        navigate('/compte');
      }
    } catch (error) {
      console.error('Erreur lors de la modification des informations:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <>
      <Navigation />
      <Container className='compteModif'>
        <h1>Mon Compte</h1>
        <h2>Modifier mes informations</h2>
        <Container className='conteneur-modifcompte'>
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
                  Merci de renseigner l'adresse email actuelle.
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
                    Merci de choisir un nom d'utilisateur.
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
                  Merci d'entrer un mot de passe valide.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </Form>
        </Container>

        <Container className='space-btn'>
          <Button type="submit" onClick={handleSubmit} className='btn-valider bold-link'>
            VALIDER
          </Button>
          <Button className="bold-link">
            <Link to="/compte">Retour</Link>
          </Button>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default ModifInfo;
