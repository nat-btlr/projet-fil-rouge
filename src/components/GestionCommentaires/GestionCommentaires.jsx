import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import FooterAdmin from "../FooterAdmin/FooterAdmin";

const GestionCommentaires = () => { 
  return (
    <div>
      <NavAdmin />
      <h1>Gestion des Commentaires</h1>
      <p>Cette section permettra de gérer les commentaires des membres.</p>
      <FooterAdmin />
    </div>
  );
}

export default GestionCommentaires;