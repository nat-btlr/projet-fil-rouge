import { useState } from 'react';
import './style.css';
import {
  Container,
  Button,
  InputGroup,
  Form,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Nav';

const ModifInfo = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const formulaire = event.currentTarget;
    if (formulaire.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Navigation />
      <Container>
        <h1 className='montitre'>Mon Compte</h1>
        <h2 className='modif'>Modifier mes informations</h2>
        <h3 className='n-membre'>n° membre : 24456777</h3>
        <div className="button-genre-container">
          <Button className="buttonGenre" as="input" type="button" value="Madame" />
          <Button className="buttonGenre" as="input" type="button" value="Monsieur" />
          <Button className="buttonGenre" as="input" type="button" value="Ne se prononce pas" />
        </div>
      </Container>

      <Container className='conteneur-modifcompte'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
          <div className='change-identite'>
            <Form.Group as={Col} md="10" controlId="validationPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Prénom"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nom"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </div>
          </Row>
          {/* <Row className="mb-3"> */}
            <div className='change-adresse'>
          <Form.Group as={Col} md="10" controlId="validationAdresse">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Adresse" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          <Form.Group as={Col} md="10" controlId="validationCodePostal">
              <Form.Label>Code postal</Form.Label>
              <Form.Control type="text" placeholder="Code postal" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationVille">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" placeholder="Ville" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            </div>
          {/* </Row> */}
          <Row>
            <div className='change-num'>
          <Form.Group as={Col} md="10" controlId="validationTelFixe">
              <Form.Label>Téléphone fixe</Form.Label>
              <Form.Control type="tel" placeholder="Téléphone fixe" required />
              <Form.Control.Feedback type="invalid">
                Please provide a good number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationTelPortable">
              <Form.Label>Téléphone portable</Form.Label>
              <Form.Control type="tel" placeholder="Téléphone portable" required />
              <Form.Control.Feedback type="invalid">
                Please provide a good number.
              </Form.Control.Feedback>
            </Form.Group>
            </div>
            </Row>
            <div className='change-mail'>
            <Form.Group as={Col} md="10" controlId="validationPseudo">
              <Form.Label>Pseudo</Form.Label>
              <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Pseudo"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="E-mail" required />
              <Form.Control.Feedback type="invalid">
                Please provide a good email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationMdp">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" required />
              <Form.Control.Feedback type="invalid">
                Please provide a good number.
              </Form.Control.Feedback>
            </Form.Group>
            </div>
        </Form>
      </Container>

      <Container className='space-btn'>
        <Button className='btn-valider bold-link' type="submit">VALIDER</Button>
        <Button className="bold-link"><Link to="/espaceclient">Retour</Link></Button>
      </Container>
    </>
  );
};

export default ModifInfo;
