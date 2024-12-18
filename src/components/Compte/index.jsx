import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Nav';
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/index';
import './style.css';
import LogoutButton from '../ButtonLogout/ButtonLogout';
import axios from 'axios';

const PageCompte = () => {
  // State to keep user data
  const [user, setUser] = useState(null);

  // Hook used to manage navigation
  const navigate = useNavigate();

  // URL for API requests
  const apiUrl = import.meta.env.VITE_API_URL;

  // Getting user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = storedUser ? storedUser.email : null;

  useEffect(() => {
    // Funcrtion to get user data from the server
    const fetchUser = async () => {
      if (!email) {
        console.error("Email is not available.");
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/api/getuser`, { params: { email } });
        if (response.status === 200) {
          setUser(response.data); // Communicating the info about the user into the state
          // Updating localStorage using the updated data
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

  // Удаление аккаунта
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
        localStorage.removeItem("user"); // Deleting data from the local storagel
        navigate("/"); // Redirecting to the home page
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
          <div className="headline">
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
          <Button className="buttonSupprimer" onClick={handleDeleteAccount}>
            Supprimer mon compte Futures Mamans
          </Button>
          <LogoutButton className="buttonLogout" />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default PageCompte;
