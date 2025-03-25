/*
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import MapView from "./components/MapView/MapView";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/useAuth"; // ✅ Wrap App with AuthProvider

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;

*/

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";  
import Register from "./pages/RegisterPage";  // ✅ Update this if file is still Register.js
import DashboardPage from "./pages/DashboardPage";  
import MapView from "./components/MapView/MapView";  // ✅ Correct Import Path
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
