import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export function Addcommande() {
    const [idClient, setIdClient] = useState("");
    const [commandeArticles, setCommandeArticles] = useState([]);
    const [nomClient, setNomClient] = useState("");
    const [emailClient, setEmailClient] = useState("");
    const [telephoneClient, setTelephoneClient] = useState("");
    const [emplacementClient, setEmplacementClient] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/articles")
            .then(response => {
                setArticles(response.data);
                // initialise quantité pour chaque article à 0 
                const initialCommandeArticles = response.data.map(article => ({
                    idArticle: article.id,
                    quantite: 0
                }));
                setCommandeArticles(initialCommandeArticles);
            })
            .catch(error => {
                console.error("Erreur lors du chargement des articles :", error);
            });
    }, []);

    const handleQuantiteChange = (event, idArticle) => {
        const newCommandeArticles = commandeArticles.map(article => {
            if (article.idArticle === idArticle) {
                return { ...article, quantite: parseInt(event.target.value) };
            }
            return article;
        });
        setCommandeArticles(newCommandeArticles);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const clientData = {
            nom: nomClient,
            email: emailClient,
            telephone: telephoneClient,
            emplacement: emplacementClient
        };

        // filtrer article avec quantité > 0 
        const articlesACommander = commandeArticles.filter(article => article.quantite > 0);

        // ajout client avant passer commande 
        axios.post("http://localhost:5000/api/client", clientData)
            .then(response => {
                const clientId = response.data.id; // récupération id client
                // Ajout de chaque article avec les id des différents client
                return Promise.all(articlesACommander.map(article => 
                    axios.post("http://localhost:5000/api/commandes", { 
                        id_client: clientId,
                        id_article: article.idArticle,
                        quantite: article.quantite
                    })
                ));
            })
            .then(() => {
                alert('Commande ajoutée avec succès !');
                setIdClient("");
                setNomClient("");
                setEmailClient("");
                setTelephoneClient("");
                setEmplacementClient("");
                // Mettre a jour les quantité 
                setCommandeArticles(commandeArticles.map(article => ({ ...article, quantite: 0 })));
            })
            .catch(error => {
                console.error("Erreur lors de l'ajout de la commande :", error);
                alert("Erreur lors de l'ajout de la commande. Veuillez réessayer.");
            });
    };

    return (
        <div className="max-w-3xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Formulaire de Commande</h2>
            <div className='formulaire rounded-lg shadow-md items-center'>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white">
                    <div>
                        <label htmlFor="nom_client" className="block text-sm font-medium text-gray-700">Nom :</label>
                        <input type="text" id="nom_client" value={nomClient} onChange={(e) => setNomClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="email_client" className="block text-sm font-medium text-gray-700">Email :</label>
                        <input type="email" id="email_client" value={emailClient} onChange={(e) => setEmailClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="telephone_client" className="block text-sm font-medium text-gray-700">Téléphone :</label>
                        <input type="tel" id="telephone_client" value={telephoneClient} onChange={(e) => setTelephoneClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="emplacement_client" className="block text-sm font-medium text-gray-700">Emplacement :</label>
                        <input type="text" id="emplacement_client" value={emplacementClient} onChange={(e) => setEmplacementClient(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        {articles.map(article => (
                            <div key={article.id}>
                                <label htmlFor={`quantite_article_${article.id}`} className="block text-sm font-medium text-gray-700">{article.nom} :</label>
                                <input 
                                    type="number" 
                                    min="0" 
                                    id={`quantite_article_${article.id}`} 
                                    value={commandeArticles.find(item => item.idArticle === article.id).quantite} 
                                    onChange={(e) => handleQuantiteChange(e, article.id)} 
                                    className="mt-1 block w-20 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className=" border text-w py-2 px-4 rounded bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-300">Ajouter</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
