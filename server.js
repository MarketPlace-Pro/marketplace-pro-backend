const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to allow frontend to connect
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://marketplace-pro.github.io');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ message: '🚀 Backend server is working!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

// Add this before app.listen()
app.get('/api/products/featured', (req, res) => {
    res.json({
        message: "Featured products endpoint working!",
        featured: ["Product A", "Product B", "Product C"]
    });
});