// StrictMode ayuda a detectar problemas durante el desarrollo.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Busca el div #root del HTML y monta toda la aplicacion React alli.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
