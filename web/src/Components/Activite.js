import axios from 'axios';
import React, { useEffect, useState } from 'react';

export  function Activite() {
  const [activites, setActivites] = useState([]);
  const joursDeLaSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

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

  const activitesParJour = joursDeLaSemaine.reduce((acc, jour) => {
    acc[jour] = activites.filter(activite => activite.jour === jour);
    return acc;
  }, {});

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
