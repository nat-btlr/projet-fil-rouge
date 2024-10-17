import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../Connexion/style.css';
import Navigation from '../Navigation/Nav';

const Inscription = () => (
<>
  <Navigation />
  <div className="form-container">
      <Form>
        <h1>Créer un compte</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrer votre mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Pseudo</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre pseudo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRadio">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Femme</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">Homme</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label class="form-check-label" for="inlineRadio3">Ne se prononce pas</label>
          </div>
        </Form.Group>
        <div className="creationContainer">
          <Button className="buttonForm"><Link to="/">Créer un compte</Link></Button>
        </div>
      </Form>
    </div>
  </>
);
export default Inscription;