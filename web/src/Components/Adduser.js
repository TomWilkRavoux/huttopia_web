import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export  function Adduser(){
const [nom,setNom] = useState("")
const [emplacement,setEmplacement] = useState("")
const [email,setEmail] = useState("")
const [telephone,setTelephone] = useState("")
const handleClick=()=>{
    axios.post("http://localhost:5000/api/post", {nom, emplacement,email,telephone}).then(()=>{
        setNom("")
        setEmplacement("")
        setEmail("")
        setTelephone("")
    });
}


    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" placeholder='votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                <input type="text" placeholder='votre emplacement' value={emplacement} onChange={(e) => setEmplacement(e.target.value)} />
                <input type="text" placeholder='votre email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='votre telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                <button type='submit'>+</button>
                <Link to="/"><button type='Submit' onClick={handleClick}>+</button></Link>
            </form>
            
        </div>
    )
}


