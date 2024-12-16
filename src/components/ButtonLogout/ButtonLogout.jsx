import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/public/logout', {}, { withCredentials: true });
      
      localStorage.removeItem("user");
  
      window.location.href = '/';
    } catch (error) {
      console.error('Error pendant la deconnexion', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
