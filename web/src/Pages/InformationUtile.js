import React from 'react';
import { Link } from "react-router-dom";
import HuttopiaLogo from '../asset/img/Huttopia_logo.png';

export function InformationUtile() {
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
        <Link to="/homecommande" className="button-style">Pain et Viennoiserie</Link>
      </div>
      <div className="mt-8">
        <Link to="navettes_funiculaire" className="button-style">Navettes Funiculaire</Link>
      </div>
      <div className="mt-8">
        <Link to="location_materiel_ski" className="button-style">Location Matériel de Ski</Link>
      </div>
      <div className="mt-8">
        <Link to="forfait_ski" className="button-style">Forfait de Ski</Link>
      </div>
    </div>
  );
}
