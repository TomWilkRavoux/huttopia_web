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
        <div>
            
            <form onSubmit={id ? handleModifier : handleClick}>
                <input type="text" placeholder='votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                <input type="text" placeholder='votre emplacement' value={emplacement} onChange={(e) => setEmplacement(e.target.value)} />
                <input type="text" placeholder='votre email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='votre telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                
                <button type='submit'>{id ? "Modifier" : "Ajouter"}</button>
                
            </form>
            {id ? <Link to="/client">Retour</Link> : <Link to="/client">Retour à la liste des clients</Link>}
        </div>
    )
}
