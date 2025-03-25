const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json()); // ✅ Ensure JSON body is parsed
app.use(cors());

const users = [
  { username: "admin", password: "password123456" } // ✅ Ensure this matches your frontend request
];

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received Login Request:", req.body); // ✅ Debugging log

  // Find user
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    console.log("Invalid credentials - User not found"); // ✅ Debugging log
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate token
  const token = jwt.sign({ username }, "your_secret_key", { expiresIn: "1h" });

  console.log("Login Successful! Generated Token:", token); // ✅ Debugging log
  res.json({ token });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
