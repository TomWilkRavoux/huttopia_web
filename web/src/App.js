import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Adduser } from './Components/Adduser';
import { Client } from './Components/client';
import PrivateRoutes from './Components/protectedRoutes.js';
import { Dashactivite } from './Pages/Dashactivite';
import { Dashboard } from './Pages/Dashboard';
import { Dashcommande } from './Pages/Dashcommande.js';
import { Home } from './Pages/Home.js';
import { HomeTwo } from './Pages/HomeTwo.js';
import { HomeCommmande } from './Pages/Homecommande';
import { Life } from './Pages/Life';
import { Login } from './Pages/Login';
import EditActivite from './Components/modifierActi.js';
import AdminActi from './Components/adminAjoutActi.js';





export default function App() {

  return(
  
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/homecommande" element={<HomeCommmande />} />
          <Route path="/life" element={<Life />}/>
          <Route path="/login" element={<Login />}/>
          <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard/>} path="/dashboard" exact/>
                <Route element={<Dashcommande/>} path="/dashcommande" exact/>
                <Route element={<Dashactivite/>} path="/dashactivite" exact/>
            </Route>
          <Route path="/client" element={<Client />} />
          <Route path="/update/:id" element={<Adduser />} />
          <Route path="/edit-activite/:id" element={<EditActivite />} />
          <Route path="/adduser" element={<Adduser />} />

          <Route path="/add-acti" element={<AdminActi />}/>
        </Routes>
      </BrowserRouter>
    </div>  
    
  )
}

