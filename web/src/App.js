import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Adduser } from './Components/Adduser';
import { Client } from './Components/client';
import PrivateRoutes from './Components/protectedRoutes.js';
import { CarnetAdresse } from './Pages/CarnetAdresse';
import { Dashactivite } from './Pages/Dashactivite';
import { Dashboard } from './Pages/Dashboard';
import { Dashcommande } from './Pages/Dashcommande.js';
import { Detente } from './Pages/Detente.js';
import { ForfaitSki } from './Pages/ForfaitSki';
import { Home } from './Pages/Home.js';
import { HomeTwo } from './Pages/HomeTwo.js';
import { HomeCommmande } from './Pages/Homecommande';
import { Information } from './Pages/Information';
import { InformationUtile } from './Pages/InformationUtile';
import { LocationMaterielSki } from './Pages/LocationMaterielSki';
import { Login } from './Pages/Login';

import { NavettesFuniculaire } from './Pages/NavettesFuniculaire';
import { Restaurant } from './Pages/Restaurant';

import EditActivite from './Components/modifierActi.js';
import AdminActi from './Components/adminAjoutActi.js';
import { ActiviteLoisir } from './Pages/ActiviteLoisir.js';






export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/homecommande" element={<HomeCommmande />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" exact />
            <Route element={<Dashcommande />} path="/dashcommande" exact />
            <Route element={<Dashactivite />} path="/dashactivite" exact />
            <Route element={<AdminActi />} path="/add-acti" exact />
            <Route element={<EditActivite />} path="/edit-activite/:id" exact />
            <Route element={<Dashactivite />} path="/dashactivite" exact />
            <Route element={<Dashactivite />} path="/dashactivite" exact />
          </Route>

            {
              /* 
              <Route path="/client" element={<Client />} />
              <Route path="/update/:id" element={<Adduser />} />
              <Route path="/adduser" element={<Adduser />} />
              */
            }

          <Route path="/information" element={<Information />} />
          <Route path="/information/informationutile" element={<InformationUtile />} />
          <Route path="/information/carnetadresse" element={<CarnetAdresse />} />
          <Route path="/information/informationutile/navettes_funiculaire" element={<NavettesFuniculaire />} />
          <Route path="/information/informationutile/location_materiel_ski" element={<LocationMaterielSki />} />
          <Route path="/information/informationutile/forfait_ski" element={<ForfaitSki />} />
          <Route path="/information/carnetadresse/restaurant" element={<Restaurant />} />
          <Route path="/information/carnetadresse/activites-loisirs" element={<ActiviteLoisir />} />
          <Route path="/information/carnetadresse/Detente" element={<Detente />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
