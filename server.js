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
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add this before app.listen()
app.get('/api/products/featured', (req, res) => {
    res.json({
        message: "Featured products endpoint working!",
        featured: ["Product A", "Product B", "Product C"]
    });
});
// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ message: '🚀 Backend server is working!' });
});

// ⬇️ ADD THE PRODUCTS ENDPOINT RIGHT HERE ⬇️
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Smartphone",
            price: 299.99,
            description: "Latest model smartphone"
        },
        {
            id: 2,
            name: "Laptop", 
            price: 899.99,
            description: "High-performance laptop"
        },
        {
            id: 3,
            name: "Headphones",
            price: 149.99,
            description: "Wireless noise-cancelling headphones"
        }
    ];
    res.json(products);
});

// Start the server
app.listen(PORT, () => {