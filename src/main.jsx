import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Mini-Project1-React">
    <App />
  </BrowserRouter>
)