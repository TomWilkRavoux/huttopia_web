import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Addcommande } from "../Components/Addcommande";

export function Dashcommande() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loaddata();
  }, []); // Le tableau de dépendances vide assure que loaddata() est appelée une seule fois après le rendu initial


  const loaddata = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  const loadcommande = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/commandes");
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      try {
        await axios.delete(`http://localhost:5000/api/remove/${id}`);
        setTimeout(() => loaddata(), 5000);
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Liste des commandes</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Nom <br /> Emplacement <br /> Téléphone </th>
            <th className="border border-gray-200 px-4 py-2"></th>

            <th className="border border-gray-200 px-4 py-2">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((da) => (
            <tr key={da.id} className="border border-gray-200">
              <td className="border border-gray-200 px-4 py-2 text-center">{da.nom} <br /> {da.emplacement} <br /> {da.telephone}</td>
              <td className="border border-gray-200 px-4 py-2 text-center">{da.id_article} <br /> {da.quantite}</td>              
              <td className="border border-gray-200 px-4 py-2 flex items-center justify-center">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleDelete(da.id)}>Supprimer</button>
                <Link to={`/update/${da.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Addcommande/>
      <div className="mt-4 flex justify-center">
        <Link to="/adduser" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ajouter une commande</Link>
      </div>
    </div>
  );
}
