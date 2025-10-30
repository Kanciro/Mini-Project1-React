import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // 1. Importa tu componente App
import './index.css';      // 2. Importa tus estilos globales

// 3. Le dice a React que renderice tu app dentro del <div> con id="root" en tu index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);