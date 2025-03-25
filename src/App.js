import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";  
import Register from "./pages/RegisterPage"; 
import DashboardPage from "./pages/DashboardPage";  
import MapView from "./components/MapView/MapView";  
import ProtectedRoute from "./components/MapView/ProtectedRoute";  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/map/:id" element={<MapView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
