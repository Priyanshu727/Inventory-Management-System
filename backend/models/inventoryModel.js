const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier', required: true
    },
    price: {
        type: Number,
        required: true
    },
    lowStockThreshold: {
        type: Number,
        default: 5
    }, // Default low stock threshold
});

module.exports = mongoose.model('Inventory', inventorySchema);
