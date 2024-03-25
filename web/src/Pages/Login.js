import React, { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Redirection vers une autre page si l'authentification est réussie
        window.location.href = '/dashboard';
      } else {
        // Affichage d'un message d'erreur si l'authentification échoue
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Erreur lors de la connexion.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}
