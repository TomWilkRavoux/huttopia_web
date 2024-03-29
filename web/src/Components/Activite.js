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
    <div className="container mx-auto font-family-MaPolice">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border custom-border p-2 mt-8">
          <thead>
            <tr>
              <th className="custom-border bg-[#00533C] text-w p-2">Activite</th>
              {joursDeLaSemaine.map(jour => (
                <th key={jour} className="custom-border  p-2 text-w bg-[#00533C]">{jour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activites.map(activite => (
              <tr key={activite.id}>
                <td className="custom-border bg-[#FFFFFF]  p-2">{activite.nom}</td>
                {joursDeLaSemaine.map(jour => (
                  <td key={jour} className="custom-border bg-[#FFFFFF] p-2">
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
