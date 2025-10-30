import React from 'react';
import Card from './Card'; // Importamos el componente Card
import './App.css';       // Importamos los estilos

function App() {
  // Array con los nombres de los programas para las tarjetas
  const programas = [
    'ADSO',
    'REDES DE DATOS',
    'ANIMACIÓN 3D',
    'LOGISTICA',
    'MERCADEO',
    'SISTEMAS'
  ];

  return (
    <div className="container">
      {/* --- Barra de Navegación --- */}
      <nav className="navbar">
        <div className="logo"></div> {/* El círculo del logo */}
        <ul>
          <li><a href="#">INICIO</a></li>
          <li><a href="#">PROGRAMAS</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>

      {/* --- Encabezado --- */}
      <header className="main-header">
        <h1>SERVICIO NACIONAL DE APRENDIZAJE</h1>
        <h2>CENTRO DE GESTIÓN DE MERCADOS</h2>
        <h3>BOGOTÁ</h3>
      </header>

      {/* --- Cuadrícula de Tarjetas --- */}
      <main className="card-grid">
        {/* Mapeamos el array de programas para crear una Card por cada uno */}
        {programas.map((titulo) => (
          <Card key={titulo} title={titulo} />
        ))}
      </main>

      {/* --- Formulario de Contacto --- */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="nombres">NOMBRES</label>
          <input type="text" id="nombres" />
        </div>

        <div className="form-group">
          <label htmlFor="correo">CORREO</label>
          <input type="email" id="correo" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">MENSAJE</label>
          <textarea id="mensaje"></textarea>
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default App;