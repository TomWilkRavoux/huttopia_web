import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Activite from '../Components/Activite';
import Addactivite from '../Components/Addactivite';

export function Dashactivite() {
  const [data, setData] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des clients inscrits à des activités</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Client</th>
            <th className="border border-gray-200 p-2">Emplacement</th>
            <th className="border border-gray-200 p-2">Téléphone</th>
            <th className="border border-gray-200 p-2">Activité</th>
            <th className="border border-gray-200 p-2">Description</th>
            <th className="border border-gray-200 p-2">Jour</th>
            <th className="border border-gray-200 p-2">Heure</th>
            <th className="border border-gray-200 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="border border-gray-200 p-2">{entry.client_nom}</td>
              <td className="border border-gray-200 p-2">{entry.client_emplacement}</td>
              <td className="border border-gray-200 p-2">{entry.client_telephone}</td>
              <td className="border border-gray-200 p-2">{entry.activite_nom}</td>
              <td className="border border-gray-200 p-2">{entry.activite_description}</td>
              <td className="border border-gray-200 p-2">{entry.activite_jour}</td>
              <td className="border border-gray-200 p-2">{entry.activite_heure}</td>
              <td className="border border-gray-200 p-2">
                <button onClick={() => handleDelete(entry.client_id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Activite/>
      <Addactivite/>
    </div>
  );
}
