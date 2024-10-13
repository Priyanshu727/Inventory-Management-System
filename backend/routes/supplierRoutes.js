const express = require('express');
const {
    addSupplier,
    getSuppliers
} = require('../controllers/supplierController');

const router = express.Router();

// Routes
router.post('/add', addSupplier);
router.get('/', getSuppliers);

module.exports = router;
