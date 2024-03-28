import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('test');
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
};

export default Logout;
