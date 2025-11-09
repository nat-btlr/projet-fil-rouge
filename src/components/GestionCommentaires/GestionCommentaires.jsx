import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import "./GestionCommentaires.css"; 

const GestionCommentaires = () => { 
  return (
    <div className="conteneur-comm">
      <NavAdmin />
      <main className="contenu-comm">
        <h1 className="titre-commentaires">Gestion des Commentaires</h1>
        <p className="texte-comm">Cette section permettra de gérer les commentaires des membres.</p>
      </main>
      <FooterAdmin />
    </div>
  );
}

export default GestionCommentaires;