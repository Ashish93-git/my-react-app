import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DashboardPage.css"; 

const DashboardPage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card" onClick={() => navigate(`/map/${card.id}`)}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
