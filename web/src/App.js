import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home.js';
import { Life } from './Pages/Life';



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

