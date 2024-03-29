import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditActivite = () => {
    const [activites, setActivites] = useState([]);
    const joursDeLaSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

    const navigate = useNavigate();
  
    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/activites`);
        const activitesAvecJours = response.data.map(activite => ({
          ...activite,
          jour: new Date(activite.jour).toLocaleDateString('fr-FR', { weekday: 'long' })
        }));
        setActivites(activitesAvecJours);
      } catch (error) {
        console.error("Erreur lors du chargement des activités :", error);
      }
    };

    const handleDelete = async (activiteId) => {
        try {
          await axios.delete(`http://localhost:5000/api/activite/${activiteId}`);
          // Met à jour l'état pour refléter la suppression sans recharger la page
          setActivites(activites.filter(activite => activite.id !== activiteId));
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'activité:', error);
          // Gérer l'erreur (peut-être afficher un message à l'utilisateur)
        }
      };
  
    const activitesParJour = joursDeLaSemaine.reduce((acc, jour) => {
      acc[jour] = activites.filter(activite => activite.jour === jour);
      return acc;
    }, {});
  
    return (
      <div className="container mx-auto">
        <div className="overflow-x-auto">
        <button onClick={() => navigate('/add-acti')}>Ajouter une activité</button>
          <table className="table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200"></th>
                {joursDeLaSemaine.map(jour => (
                  <th key={jour} className="border border-gray-200 p-2">{jour}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activites.map(activite => (
                <tr key={activite.id}>
                  <td className="border border-gray-200 p-2">{activite.nom}</td>
                  {joursDeLaSemaine.map(jour => (
        <td key={jour} className="border border-gray-200 p-2">
          {activitesParJour[jour].map(a => (a.id === activite.id && a.heure))}
        </td>
      ))}
      {/* Ajout de la cellule Actions */}
      <td className="border border-gray-200 p-2">

        <button onClick={() => handleDelete(activite.id)}>Supprimer</button>
      </td>
    </tr>
  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default EditActivite;