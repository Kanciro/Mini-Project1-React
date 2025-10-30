import React from 'react';

// Recibimos 'title' como prop desde App.jsx
function Card({ title }) {
  return (
    <div className="card">
      {title}
    </div>
  );
}

export default Card;