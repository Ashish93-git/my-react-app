import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css"; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      alert("Username and password cannot be empty!");
      return;
    }
  
    try {
      console.log("🚀 Sending API Request:", JSON.stringify(credentials));
  
      const response = await axios.post("http://127.0.0.1:5000/api/login", credentials, {
        headers: { "Content-Type": "application/json" }
      });
  
      console.log("Login Response:", response.data);
  
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token Saved in Local Storage:", localStorage.getItem("token"));
        navigate("/dashboard");
      } else {
        alert("Invalid login credentials (No token received).");
      }
  
    } catch (error) {
      console.error("Login Error:", error.response ? error.response.data : error.message);
      alert("Invalid login credentials");
    }
  };
  
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value.trim() })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value.trim() })}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default LoginPage;
