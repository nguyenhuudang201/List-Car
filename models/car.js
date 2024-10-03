const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    code: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Car', carSchema);
