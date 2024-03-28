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
      < button onClick={handleLogout} className='mr-7'>Déconnexion</button>
      </div>
    </header>
  );
};

export default Logout;
