import React from 'react';
import { Link } from "react-router-dom";
import HuttopiaLogo from '../asset/img/Huttopia_logo.png';

export function Information() {
  return (
    <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center">
      <div className="flex items-center justify-center mt-8">
        <div style={{ width: '25em', height: 'auto' }}>
          <Link to="/Home">
            <img src={HuttopiaLogo} className="w-full" alt="Huttopia Logo" />
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <Link to="informationutile" className="button-style">Information Utile</Link>
      </div>
      <div className="mt-8">
        <Link to="carnetadresse" className="button-style">Carnet d'adresse</Link>
      </div>
    </div>
  );
}
