import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Success from './pages/Success.jsx'
import Fail from './pages/Failure.jsx'
import {BrowserRouter, Routes,Route} from "react-router-dom"

createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <Routes>
  <Route path='/' element={<App />}></Route>
  <Route path='/login' element={<App />}></Route>
  <Route path='/success' element={<Success />}></Route>
  <Route path='/fail' element={<Fail />}></Route>
 </Routes>
</BrowserRouter>
)
