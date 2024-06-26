import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Addactivite from '../Components/Addactivite';
import Logout from '../Components/logout';
import HuttopiaLogo from '../asset/img/Huttopia_logo.png';
export function Dashactivite() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get-activite-clients`);
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  const handleDelete = async (clientId) => {
    try {
      await axios.delete(`http://localhost:5000/api/remove/${clientId}`);
      console.log('Client supprimé avec succès');
      loaddata();
    } catch (error) {
      console.error('Erreur lors de la suppression du client:', error);
    }
  };
  const handleEdit = (clientId) => {
    // Redirige vers le formulaire de modification avec l'ID du client
    navigate(`/edit-client/${clientId}`);
  };

  return (
    <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center font-family-MaPolice">
      <div className="w-full p-4 flex justify-end">
        <Logout />
      </div>
      <div className="bg-[#ECF1DD]"></div>
      <div className="flex items-center justify-center mt-8">
        <div style={{ width: '25em', height: 'auto' }}>
          <Link to="/dashboard">
          <img src={HuttopiaLogo} className="w-full" alt="Huttopia Logo" />
          </Link>
        </div>
      </div>
      <table className="w-full border-collapse border custom-border  p-2 mt-8">
        <thead>
          <tr>
            <th className="custom-border bg-[#00533C] text-w  p-2">Client</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Emplacement</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Téléphone</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Activité</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Description</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Jour</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Heure</th>
            <th className="custom-border bg-[#00533C] text-w  p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.client_nom}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.client_emplacement}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.client_telephone}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.activite_nom}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.activite_description}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.activite_jour}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">{entry.activite_heure}</td>
              <td className="custom-border bg-[#FFFFFF] p-2">
                <button onClick={() => handleDelete(entry.client_id)} className='border bg-[#ff0000] hover:bg-[#8b0000] transition-colors duration-300 text-w font-bold py-2 px-4 rounded mr-2'>Supprimer</button>
                <button onClick={() => navigate(`/edit-activite/${entry.activite_id}`)} className="border bg-[#0000ff] hover:bg-[#00008b] transition-colors duration-300 text-w font-bold py-2 px-4 rounded">Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
