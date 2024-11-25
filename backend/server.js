const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

app.get("/", function(req, res) {
    res.end("Adeeb");
});

// Sample products data
const products = [
    { id: 1, name: 'Premium Cotton T-Shirt', category: 'tshirts', size: ['S', 'M', 'L'], color: 'black', price: 1499 },
    { id: 2, name: 'Classic Denim Jeans', category: 'jeans', size: ['M', 'L', 'XL'], color: 'navy', price: 2999 },
    // Add more products as needed
];

// New POST endpoint for product creation
app.post("/api/product/create", (req, res) => {
    const productData = req.body;
    // Perform the logic that was in ProductCreate.jsx here
    // For example, validate and save the product data to the database
    // ...

    res.status(201).json({ message: 'Product created successfully' });
});

// New POST endpoint for admin login
app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin123';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// New POST endpoint for filtering products
app.post("/api/products/filter", (req, res) => {
    const { category, size, color, price } = req.body;

    const filteredProducts = products.filter(product => {
        const categoryMatch = category.length === 0 || category.includes(product.category);
        const sizeMatch = size.length === 0 || size.some(s => product.size.includes(s));
        const colorMatch = color.length === 0 || color.includes(product.color);
        const priceMatch = price.length === 0 || price.some(priceRange => {
            if (priceRange === 'under-1000') return product.price < 1000;
            if (priceRange === '1000-2000') return product.price >= 1000 && product.price <= 2000;
            if (priceRange === '2000-5000') return product.price >= 2000 && product.price <= 5000;
            if (priceRange === 'over-5000') return product.price > 5000;
            return true;
        });
        return categoryMatch && sizeMatch && colorMatch && priceMatch;
    });

    res.json(filteredProducts);
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});