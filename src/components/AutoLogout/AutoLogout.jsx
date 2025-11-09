import { useEffect } from "react";
import axios from "axios";

const INACTIVITY_LIMIT = 60 * 60 * 1000;

const useAutoLogout = () => {
  useEffect(() => {
    const doClientLogout = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;
        if (token) {
          await axios.post('http://localhost:8080/api/logout', {}, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }
      } catch (e) {
      } finally {
        localStorage.removeItem('user');
        localStorage.removeItem('loginTime');
        localStorage.removeItem('lastActivity');
        delete axios.defaults.headers.common['Authorization'];
        window.location.href = '/';
      }
    };

    const checkLastActivity = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (lastActivity) {
        const timeSinceLastActivity = Date.now() - parseInt(lastActivity, 10);
        if (timeSinceLastActivity > INACTIVITY_LIMIT) {
          doClientLogout();
        }
      }
    };

    const updateActivity = () => {
      localStorage.setItem('lastActivity', Date.now().toString());
    };

    checkLastActivity();
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);

    const interval = setInterval(checkLastActivity, 60000);
    updateActivity();

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('click', updateActivity);
      clearInterval(interval);
    };
  }, []);
};

export default useAutoLogout;