import React from 'react';
import './Card.css';

function Card({ card, onClick }) {
  return (
    <div className="card" onClick={() => onClick(card.id)}>
      <h3>{card.title}</h3>
    </div>
  );
}

export default Card;