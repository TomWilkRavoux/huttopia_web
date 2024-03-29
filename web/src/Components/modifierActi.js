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
      <div className="bg-[#ECF1DD] min-h-screen flex flex-col items-center font-family-MaPolice">
        <div className="flex flex-col items-center justify-center">
          <table className="w-full border-collapse border custom-border  p-2 mt-8">
            <thead>
              <tr>
                <th className="custom-border bg-[#00533C] text-w  p-2"></th>
                {joursDeLaSemaine.map(jour => (
                  <th key={jour} className="custom-border bg-[#00533C] text-w  p-2">{jour}</th>
                ))}
                <th className="custom-border bg-[#00533C] text-w p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {activites.map(activite => (
                <tr key={activite.id}>
                  <td className="custom-border  p-2">{activite.nom}</td>
                  {joursDeLaSemaine.map(jour => (
        <td key={jour} className="custom-border p-2">
          {activitesParJour[jour].map(a => (a.id === activite.id && a.heure))}
        </td>
      ))}
      {/* Ajout de la cellule Actions */}
      <td className="custom-border text-w  p-2">

        <button onClick={() => handleDelete(activite.id)} className='border bg-[#ff0000] hover:bg-[#8b0000] transition-colors duration-300 text-w font-bold py-2 px-4 rounded mr-2'>Supprimer</button>
      </td>
    </tr>
  ))}
            </tbody>
          </table>
            <button onClick={() => navigate('/add-acti')}className="mt-4 border bg-[#0000ff] hover:bg-[#00008b] transition-colors duration-300 text-w font-bold py-2 px-4 rounded">Ajouter une activité</button>
          
        </div>
      </div>
    );
};

export default EditActivite;