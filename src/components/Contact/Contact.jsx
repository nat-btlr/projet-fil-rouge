import React, { useState } from "react";
import "./Contact.css";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import Navigation from "../Navigation/Nav";
import Footer from "../Footer/Footer";

const MAX_FILE_SIZE_MB = 2; // ✅ Taille max autorisée (en méga-octets)

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false); // ✅ Pour savoir si c'est un succès ou une erreur

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput?.files[0];

    // ✅ Vérification de la taille du fichier
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setSuccessMessage(`❌ Le fichier dépasse ${MAX_FILE_SIZE_MB} Mo. Veuillez choisir un fichier plus léger.`);
      setIsError(true);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    setIsSending(true);
    setSuccessMessage("");

    try {
      await fetch("https://formsubmit.co/biloums@yahoo.fr", {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors", // ✅ évite les erreurs liées à la redirection
      });

      setIsSending(false);
      setSuccessMessage("Votre message a bien été envoyé ! Merci 😊 !");
      setIsError(false);
      setShowPopup(true);
      form.reset();

      setTimeout(() => setShowPopup(false), 2500);
    } catch (error) {
      console.error("Erreur lors de l’envoi :", error);
      setIsSending(false);
      setSuccessMessage("❌ Une erreur est survenue. Vérifiez votre connexion.");
      setIsError(true);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2500);
    }
  };

  return (
    <>
      <Navigation />
      <h1 className="titreConnecter">Formulaire de Contact</h1>

      <div className="form-container-connexion">
        <Form className="form-connexion" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="5" controlId="username">
              <Form.Label>Pseudo</Form.Label>
              <InputGroup>
                <Form.Control type="text" name="username" placeholder="Pseudo" required />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="7" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" name="email" placeholder="E-mail" required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="sujet">
            <Form.Label>Sujet du message</Form.Label>
            <Form.Control type="text" name="sujet" placeholder="Sujet du message" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message :</Form.Label>
            <Form.Control as="textarea" name="message" rows={5} placeholder="Votre message" required />
          </Form.Group>

          <Form.Group className="position-relative mb-3" controlId="file">
            <Form.Label>Fichier (facultatif) :</Form.Label>
            <Form.Control type="file" name="file" />
            <Form.Text className="text-muted">
              Taille maximale autorisée : {MAX_FILE_SIZE_MB} Mo
            </Form.Text>
          </Form.Group>

          <Form.Group className="position-relative mb-3" controlId="terms">
            <Form.Check
              required
              name="terms"
              label="J’accepte que mes données soient utilisées pour traiter ma demande."
            />
          </Form.Group>

          {/* Champs cachés pour FormSubmit */}
          <input type="hidden" name="_next" value="https://futures-mamans.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_honey" style={{ display: "none" }} />

          <div className="creationContainer">
            <Button className="buttonForm" type="submit" disabled={isSending}>
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </Button>
          </div>
        </Form>
      </div>

      {/* ✅ Pop-up stylé (vert pour succès, rouge pour erreur) */}
      {showPopup && (
        <div className={`popup-overlay ${isError ? "popup-error" : "popup-success"}`}>
          <div className="popup-content">
            <p>{successMessage}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Contact;
