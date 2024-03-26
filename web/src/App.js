import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Adduser } from './Components/Adduser';
import { Client } from './Components/client';
import { Dashactivite } from './Pages/Dashactivite';
import { Dashboard } from './Pages/Dashboard';
import { Dashcommande } from './Pages/Dashcommande.js';
import { Home } from './Pages/Home.js';
import { Life } from './Pages/Life';
import { Login } from './Pages/Login';




export default function App() {
  return(
  
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/life" element={<Life />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/client" element={<Client />} />
          <Route path="/update/:id" element={<Adduser />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/dashactivite" element={<Dashactivite />} />
          <Route path="/dashcommande" element={<Dashcommande />} />
        </Routes>
      </BrowserRouter>
    </div>  
    
  )
}

