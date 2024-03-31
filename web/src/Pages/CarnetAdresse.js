import React from 'react';
import { Link } from "react-router-dom";
import HuttopiaLogo from '../asset/img/Huttopia_logo.png';

export function CarnetAdresse() {
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
        <Link to="restaurant" className="button-style">Restaurant <br /> Brasseries</Link>
      </div>
      <div className="mt-8">
        <Link to="activites-loisirs" className="button-style">Activités <br /> Loisirs <br /> Visites</Link>
      </div>
      <div className="mt-8">
        <Link to="Detente" className="button-style">Détente <br /> Bien être</Link>
      </div>
    </div>
  );
}
