require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Load API_KEY từ .env
const API_KEY = process.env.API_KEY;

// API endpoint để gửi API_KEY về frontend
app.get('/api/config', (req, res) => {
res.json({ apiKey: API_KEY });
});

// Phục vụ file HTML
app.use(express.static(__dirname));

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
