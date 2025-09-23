const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to allow frontend to connect
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ message: '🚀 Backend server is working!' });
});

// Products endpoint
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

// Featured products endpoint
app.get('/api/products/featured', (req, res) => {
    res.json({
        message: "Featured products endpoint working!",
        featured: ["Product A", "Product B", "Product C"]
    });
});
// Featured products endpoint
app.get('/api/products/featured', (req, res) => {
    res.json({
        message: "Featured products endpoint working!",
        featured: ["Product A", "Product B", "Product C"]
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

// Add after your test route
app.get('/api/products', (req, res) => {
    res.json({
        products: [
            {id: 1, name: "Laptop", price: 999.99, category: "Electronics"},
            {id: 2, name: "Phone", price: 699.99, category: "Electronics"},
            {id: 3, name: "Book", price: 19.99, category: "Education"}
        ]
    });
});

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            {id: 1, name: "Alice", email: "alice@example.com"},
            {id: 2, name: "Bob", email: "bob@example.com"}
        ]
    });
});