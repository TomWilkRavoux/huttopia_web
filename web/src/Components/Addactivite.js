import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddInscription() {
    const [activites, setActivites] = useState([]);
    const [selectedActivite, setSelectedActivite] = useState(null);
    const [nomClient, setNomClient] = useState("");
    const [emailClient, setEmailClient] = useState("");
    const [telephoneClient, setTelephoneClient] = useState("");
    const [emplacementClient, setEmplacementClient] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/activites")
            .then(response => {
                setActivites(response.data);
            })
            .catch(error => {
                console.error("Erreur lors du chargement des activités :", error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedActivite) {
            alert("Veuillez sélectionner une activité.");
            return;
        }

        // Création du client
        axios.post("http://localhost:5000/api/client", {
            nom: nomClient,
            email: emailClient,
            telephone: telephoneClient,
            emplacement: emplacementClient
        })
            .then(response => {
                const clientId = response.data.id; // Récupérer l'ID du client créé
                // Création de l'inscription à l'activité avec l'ID du client
                axios.post("http://localhost:5000/api/inscription-activite", {
                    activite_id: selectedActivite.id,
                    client_id: clientId // Utiliser l'ID du client créé
                })
                    .then(() => {
                        alert('Inscription à l\'activité ajoutée avec succès !');
                        setNomClient("");
                        setEmailClient("");
                        setTelephoneClient("");
                        setEmplacementClient("");
                        setSelectedActivite(null);
                        // Redirection vers la page de modification après l'ajout de l'inscription
                        window.location.href = `/modify-inscription/${clientId}`;
                    })
                    .catch(error => {
                        console.error("Erreur lors de l'ajout de l'inscription à l'activité :", error);
                        alert("Erreur lors de l'ajout de l'inscription à l'activité. Veuillez réessayer.");
                    });
            })
            .catch(error => {
                console.error("Erreur lors de la création du client :", error);
                alert("Erreur lors de la création du client. Veuillez réessayer.");
            });
    };

    return (

        <div className="max-w-3xl mx-auto py-8 font-family-MaPolice">
            <h2 className="text-2xl font-bold mb-4">Formulaire d'Inscription à une Activité</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className="formulaire rounded-lg shadow-md items-center">
                    <div>
                        <label htmlFor="nom_client" className="flex flex-col mb-3">Nom du client :</label>
                        <input type="text" id="nom_client" value={nomClient} onChange={(e) => setNomClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="email_client" className="flex flex-col mb-3">Email du client :</label>
                        <input type="email" id="email_client" value={emailClient} onChange={(e) => setEmailClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="telephone_client" className="flex flex-col mb-3">Téléphone du client :</label>
                        <input type="tel" id="telephone_client" value={telephoneClient} onChange={(e) => setTelephoneClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="emplacement_client" className="flex flex-col mb-3">Emplacement du client :</label>
                        <input type="text" id="emplacement_client" value={emplacementClient} onChange={(e) => setEmplacementClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="activite" className="flex flex-col mb-3">Choisir une activité :</label>
                        <select id="activite" value={selectedActivite ? selectedActivite.id : ''} onChange={(e) => setSelectedActivite(activites.find(activite => activite.id === parseInt(e.target.value)))} required className="mb-6">
                            <option value="">Sélectionnez une activité</option>
                            {activites.map(activite => (
                                <option key={activite.id} value={activite.id}>{activite.nom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-center mt">
                        <button type="submit" className="border text-w py-2 px-4 rounded bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-300">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
