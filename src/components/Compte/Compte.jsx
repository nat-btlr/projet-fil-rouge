import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Nav';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import './Compte.css';
import LogoutButton from '../ButtonLogout/ButtonLogout';
import axios from 'axios';

const PageCompte = () => {
  
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = storedUser ? storedUser.email : null;

  useEffect(() => {
    const fetchUser = async () => {
      if (!email) {
        console.error("Email is not available.");
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/api/getuser`, { params: { email } });
        if (response.status === 200) {
          setUser(response.data); 
          const updatedUser = { ...storedUser, ...response.data };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
          console.error("Erreur lors de la récupération des données utilisateur.");
        }
      } catch (error) {
        console.error("Erreur de requête:", error);
      }
    };

    fetchUser();
  }, [email]);

  const handleDeleteAccount = async () => {
    if (!user || !user.email) {
      alert("Utilisateur introuvable.");
      return;
    }

    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
    );
    if (!confirmation) return;

    try {
      const response = await axios.delete(`${apiUrl}/api/deleteaccount`, {
        params: { email: user.email },
      });

      if (response.status === 200) {
        alert("Votre compte a été supprimé avec succès.");
        localStorage.removeItem("user"); 
        navigate("/"); 
      } else {
        alert(`Erreur: ${response.data.message || "Une erreur s'est produite."}`);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du compte:", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <Navigation />
      <Container className="corpsCompte">
        <h1>Mon Espace Compte</h1>
        <Container className="conteneur-infocompte">
          <div className="bienvenue">
            <h3>Bienvenue {user ? user.username : ""}</h3>
            <p className="lienmodif">
              <Link to="/modifinfo">Modifier mes informations &gt;</Link>
            </p>
          </div>
          <p>
            <span className="titreChamps">E-mail :</span> {user ? user.email : "Vous n'êtes pas connecté-e"}
          </p>
        </Container>
        <Container className="boutonsGestionCompte">
          <Button className="boutonSupprimer" onClick={handleDeleteAccount}>
            Supprimer mon compte Futures Mamans
          </Button>
          <LogoutButton className="boutonLogout" />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default PageCompte;
