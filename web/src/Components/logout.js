import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('test');
    navigate("/login");
  };

  return (
    <header>
      <div className="flex justify-end">
      < button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow">Déconnexion</button>
      </div>
    </header>
  );
};

export default Logout;
