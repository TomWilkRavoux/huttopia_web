import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:5000/login', { email, password })
      .then((res) => {
        if (res.data.message === 'Login Succes') {
          localStorage.setItem('token', res.data.token);
          navigate('/dashboard');
        } else {
          alert('Login échoué. Veuillez vérifier vos informations.');
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Entrer votre email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrer votre mot de passe"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
