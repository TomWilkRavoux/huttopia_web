import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";


export function Adduser() {
    const { id } = useParams();

    const [nom, setNom] = useState("");
    const [emplacement, setEmplacement] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/get/${id}`).then((response) => {
                const data = response.data[0];
                setNom(data.nom || "");
                setEmplacement(data.emplacement || "");
                setEmail(data.email || "");
                setTelephone(data.telephone || "");
            }).catch((error) => {
                console.error("Error fetching user:", error);
            });
        }
    }, [id]);

    const handleClick = () => {
        axios.post("http://localhost:5000/api/post", { nom, emplacement, email, telephone })
            .then(() => {
                setNom("");
                setEmplacement("");
                setEmail("");
                setTelephone("");
            }).catch((error) => {
                console.error("Error creating user:", error);
            });
    }

    const handleModifier = () => {
        axios.put(`http://localhost:5000/update/${id}`, { nom, emplacement, email, telephone })
            .then(() => {
                setNom("");
                setEmplacement("");
                setEmail("");
                setTelephone("");
            }).catch((error) => {
                console.error("Error updating user:", error);
            });
    }

    return (
        <div className='flex justify-center items-center bg-[#ECF1DD] min-h-screen'>
            <div className=''>
                <form onSubmit={id ? handleModifier : handleClick} className='formulaire rounded-lg shadow-md items-center'>
                    <div className="flex flex-col mb-3">
                        <label> Nom </label>
                        <input type="text" placeholder='votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label> Emplacement </label>
                        <input type="text" placeholder='votre emplacement' value={emplacement} onChange={(e) => setEmplacement(e.target.value)} />    
                    </div>
                    <div className="flex flex-col mb-3">
                        <label> Email </label>
                        <input type="text" placeholder='votre email' value={email} onChange={(e) => setEmail(e.target.value)} />    
                    </div>
                    <div className="flex flex-col mb-3">
                        <label> Telephone </label>
                        <input type="text" placeholder='votre telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />    
                    </div>
                    
                    <button type='submit'>{id ? "Modifier" : "Ajouter"}</button>
                    
                </form>
                <div className="flex flex-col mb-3">
                    {id ? <Link to="/client">Retour</Link> : <Link to="/client" className='text-center'>Retour à la liste des clients</Link>}
                </div>
            </div>
        </div>
    )
}
