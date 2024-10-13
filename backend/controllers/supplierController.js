const Supplier = require('../models/supplierModel');

// Function to add a new supplier
const addSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json({ message: 'Supplier added successfully', data: supplier });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all suppliers
const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export the functions
module.exports = {
    addSupplier,
    getSuppliers,
};
