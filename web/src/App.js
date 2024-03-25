
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Life} from './Pages/Life' 
import { Home } from './Pages/Home.js'
import './App.css';
import React, { useEffect, useState } from 'react';

const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error('Erreur de récupération des données depuis le backend:', error));
  }, []);


export default function App() {
  return(
  
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/life" element={<Life />}/>
          </Routes>
      </BrowserRouter>
    </div>  
    
  )
}


