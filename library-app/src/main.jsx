import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Pages/homePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import HomePage from './Pages/homePage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)
