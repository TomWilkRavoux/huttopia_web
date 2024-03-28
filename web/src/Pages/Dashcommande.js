import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Addcommande } from "../Components/Addcommande";
import Logout from '../Components/logout'


export function Dashcommande() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loaddata();
  }, []); // Le tableau de dépendances vide assure que loaddata() est appelée une seule fois après le rendu initial

  const loaddata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get`);
      setData(response.data);
      const groupedData = {};

      response.data.forEach((row) => {
        const clientId = `${row.id}-${row.nom}-${row.emplacement}-${row.telephone}`;
        if (!groupedData[clientId]) {
          groupedData[clientId] = {
            id: clientId,
            nom: row.nom,
            emplacement: row.emplacement,
            telephone: row.telephone,
            commandes: [],
          };
        }
        groupedData[clientId].commandes.push({
          nom_article: row.nom_article,
          quantite_commande: row.quantite_commande,
        });
      });

      setData(Object.values(groupedData));
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log("ID du client à supprimer :", id); // Afficher l'ID du client à supprimer
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      try {
        console.log("Tentative de suppression du client...");
        await axios.delete(`http://localhost:5000/api/remove/${id}`);
        setTimeout(() => loaddata(), 5000);
      } catch (error) {
        console.error("Erreur lors de la suppression du client :", error);
      }
    } else {
      console.log("Suppression annulée.");
    }
  };

  return (

    <div className="table-auto">
      <div>
        <Logout />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">Liste des commandes</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Nom <br /> Emplacement <br /> Téléphone </th>
            <th className="border border-gray-200 px-4 py-2">Baguette tradition</th>
            <th className="border border-gray-200 px-4 py-2">Pain sans gluten</th>
            <th className="border border-gray-200 px-4 py-2">Pain complet</th>
            <th className="border border-gray-200 px-4 py-2">Pain aux céréales</th>
            <th className="border border-gray-200 px-4 py-2">Croissant</th>
            <th className="border border-gray-200 px-4 py-2">Pain au chocolat</th>
            <th className="border border-gray-200 px-4 py-2">Chaussons aux pommes</th>
            <th className="border border-gray-200 px-4 py-2">Quantité</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((da, index) => (
            <tr key={`${da.nom}-${da.emplacement}-${da.telephone}`} className="border border-gray-200">
              <td className="border border-gray-200 px-4 py-2 text-center">
                {da.nom} <br /> {da.emplacement} <br /> {da.telephone}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Baguette tradition')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Pain sans gluten')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Pain complet')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Pain aux céréale')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Croissant')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Pain au chocolat')?.quantite_commande || ''}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {da.commandes.find(commande => commande.nom_article === 'Chausson aux pommes')?.quantite_commande || ''}
            </td>

              <td className="border border-gray-200 px-4 py-2 text-center">
                
              </td>
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
