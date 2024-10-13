const express = require('express');
const multer = require('multer');
const {
    addInventory,
    getInventory,
    exportCSV,
    bulkImport,
    getLowStock
} = require('../controllers/inventoryController');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Routes
router.post('/add', addInventory);
router.get('/', getInventory);
router.post('/export', exportCSV);
router.post('/bulk-import', upload.single('file'), bulkImport);
router.get('/low-stock', getLowStock);

module.exports = router;
