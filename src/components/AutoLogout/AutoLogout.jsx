import { useEffect } from "react";

const INACTIVITY_LIMIT = 60 * 60 * 1000;

const useAutoLogout = () => {
  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem('lastActivity', Date.now());
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);

    const interval = setInterval(() => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (lastActivity && Date.now() - lastActivity > INACTIVITY_LIMIT) {
        localStorage.removeItem('user');
        localStorage.removeItem('loginTime');
        localStorage.removeItem('lastActivity');
        window.location.href = '/';
      }
    }, 60000);

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