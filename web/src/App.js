import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Life} from './Pages/Life' 
import { Home } from './Pages/Home.js'
import './App.css';

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


