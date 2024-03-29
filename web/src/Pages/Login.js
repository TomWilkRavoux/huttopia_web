import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Added for error handling

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('test', response.data.token)
        navigate("/dashboard");
      } else {
        setErrorMessage('Login failed. Please check your credentials.'); // Dmessage erreur
        navigate("/login");
      }
    } catch (error) {
      console.error(error); // log debug
      setErrorMessage('An error occurred. Please try again later.'); 
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#ECF1DD] min-h-screen">
      <div className="formulaire rounded-lg shadow-md items-center'">
        <h2 className='text-center mb-2'>Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white">
          <div className="flex flex-col mb-3">
            <label htmlFor="email">Email :</label>
            <input
              type="email" // Corrected input type for email
              placeholder="Entrer votre email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              placeholder="Entrer votre mot de passe"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className=""
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
              <div className="flex justify-center">
                <button type="submit" className=" border text-w py-2 px-4 rounded bg-[#00533C] hover:bg-[#7EA31A] transition-colors duration-300">Connexion</button>
              </div>
        </form>
      </div>
    </div>
  );
}
