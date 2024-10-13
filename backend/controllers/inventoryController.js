const Inventory = require('../models/inventoryModel');
const { Parser } = require('json2csv');
const csv = require('csv-parser');
const fs = require('fs');

// Function to add a new inventory item
const addInventory = async (req, res) => {
    try {
        const inventoryItem = new Inventory(req.body);
        await inventoryItem.save();
        res.status(201).json({ message: 'Inventory item added successfully', data: inventoryItem });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all inventory items
const getInventory = async (req, res) => {
    try {
        const inventoryItems = await Inventory.find().populate('supplier');
        res.status(200).json(inventoryItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to export inventory data as CSV
const exportCSV = async (req, res) => {
    try {
        const inventoryItems = await Inventory.find().populate('supplier').lean();
        const fields = ['name', 'quantity', 'supplier', 'price'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(inventoryItems);

        res.header('Content-Type', 'text/csv');
        res.attachment('inventory.csv');
        res.status(200).send(csv);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to import inventory data from CSV
const bulkImport = async (req, res) => {
    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await Inventory.insertMany(results);
                res.status(201).json({ message: 'Bulk import successful', data: results });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
};

// New function to get low stock items using aggregation
const getLowStock = async (req, res) => {
    try {
        const lowStockItems = await Inventory.aggregate([
            {
                $addFields: {
                    lowStock: { $lt: ["$quantity", "$lowStockThreshold"] },
                },
            },
            {
                $match: { lowStock: true },
            },
        ]).exec();
        res.status(200).json(lowStockItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Export the functions
module.exports = {
    addInventory,
    getInventory,
    exportCSV,
    bulkImport,
    getLowStock, // Ensure you export the new function
};
