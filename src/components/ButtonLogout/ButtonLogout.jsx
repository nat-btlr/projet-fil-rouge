import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      await axios.post(
        'http://localhost:8080/api/logout',
        {},
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );

      localStorage.removeItem("user");
      localStorage.removeItem("loginTime");
      localStorage.removeItem("lastActivity");
      delete axios.defaults.headers.common['Authorization'];

      window.location.href = '/';
    } catch (error) {
      console.error('Error pendant la deconnexion', error);
      localStorage.removeItem("user");
      localStorage.removeItem("loginTime");
      localStorage.removeItem("lastActivity");
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/';
    }
  };

  return (
    <button onClick={handleLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;