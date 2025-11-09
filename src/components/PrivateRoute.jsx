import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Non connecté → page de connexion
  if (!user) {
    return <Navigate to="/connexion" />;
  }

  // Si roles autorisés définis et que l'utilisateur n'est pas dans la liste
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // redirige vers accueil public
  }

  // Sinon accès autorisé
  return children;
};

export default PrivateRoute;
