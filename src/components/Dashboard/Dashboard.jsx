import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Card from './Card';
import './Dashboard.css';

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <div>User not logged in</div>;
  }

  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
  ];

  const handleCardClick = (id) => {
    navigate(`/map?cardId=${id}`);
  };
  

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;