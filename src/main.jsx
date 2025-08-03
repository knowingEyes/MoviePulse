import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./api.js"
import "./HeroBanner.jsx"
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
