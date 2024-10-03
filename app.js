const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const carRoutes = require('./routes/car');

const app = express();
const port = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/carDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); // Để load file giao diện tĩnh

// Routes
app.use('/api/cars', carRoutes);

// Khởi động server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
