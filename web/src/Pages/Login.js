import React, {useState} from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


export function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/login',{email, password})
    .then(res => {
      if(res.data === "Login Succes"){
        navigate("/dashboard")
      }
    })
    .catch(err => console.error(err))
  }
  return(
    <div className="">
      <div className="bg-white p-3 rounded w-25">
        <h2>Connexion</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input text="email" placeholder="Entrer votre email" name="name" onChange={e => setEmail(e.target.value)} className=""/>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <input text="password" placeholder="Entrer votre mot de passe" name="name" onChange={e => setPassword(e.target.value)} className=""/>
          </div>
          <button type="submit" className="">Sign in</button>
        </form>
      </div>
    </div>
  )
}
