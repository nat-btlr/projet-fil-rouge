// import React from 'react';
// import Link from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import './style.css';
// import Navigation from '../Navigation/Nav';

// const Connexion = () => (
// <>
//   <Navigation />
//   <div className="form-container">
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
//         <h1>Se Connecter</h1>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Entrer votre email" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Mot de passe</Form.Label>
//           <Form.Control type="password" placeholder="Entrer votre mot de passe" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Rester connecté-e" />
//         </Form.Group>
//         <div className="connexionContainer">
//             <Button className="buttonForm" type="submit">Connexion</Button>
//           <Form.Label>Mot de passe oublié ?</Form.Label>
//         </div>
//         <div className="creationContainer">
//           <p id="textConnection">Pas de compte ?</p>
//           <Button className="buttonForm"><Link to="/inscription">Créer un compte</Link></Button>
//         </div>
//       </Form>
//     </div>
//   </>
// );
// export default Connexion;

import React, { useState } from 'react';
import Link from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Pour rediriger après la connexion
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';
import Navigation from '../Navigation/Nav';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch('http://localhost:8080/api/login', { // URL de l'API Java
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }

      const data = await response.json();
      // Gérer la réponse de l'API, par exemple, stocker le token ou rediriger
      console.log('Réponse API:', data);

      // Rediriger après la connexion réussie
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className="form-container">
        <Form onSubmit={handleLogin}>
          <h1>Se Connecter</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état "email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Met à jour l'état "password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rester connecté-e" />
          </Form.Group>

          {error && <p className="error-message">{error}</p>} {/* Affiche l'erreur */}

          <div className="connexionContainer">
            <Button className="buttonForm" type="submit">
              Connexion
            </Button>
            <Form.Label>Mot de passe oublié ?</Form.Label>
          </div>

          <div className="creationContainer">
            <p id="textConnection">Pas de compte ?</p>
            <Button className="buttonForm">
              <Link to="/inscription">Créer un compte</Link>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Connexion;
