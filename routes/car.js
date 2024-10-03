const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// POST: Thêm thông tin ô tô
router.post('/add', async (req, res) => {
    const { code, color, price } = req.body;
    try {
        const newCar = new Car({ code, color, price });
        await newCar.save();
        res.status(201).send('Car added successfully');
    } catch (error) {
        res.status(400).send('Error adding car');
    }
});

// GET: Lấy danh sách ô tô đã nhập
router.get('/list', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).send('Error fetching cars');
    }
});

module.exports = router;
