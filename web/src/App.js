import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home.js';
import { Life } from './Pages/Life';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { Client } from './Components/client';




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
        </Routes>
      </BrowserRouter>
    </div>  
    
  )
}

