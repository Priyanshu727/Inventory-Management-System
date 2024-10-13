const express = require('express');
const dotenv = require('dotenv');
// const multer = require('multer');
const connectDB = require('../config/db');
const inventoryRoutes = require('../routes/inventoryRoutes');
const supplierRoutes = require('../routes/supplierRoutes');




// Load environment variables from the `.env` file
dotenv.config();

connectDB();

const app = express();

app.use(express.json());


app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);



const PORT = process.env.PORT || 8084;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err, 'server Failed to start');
    } else {
        console.log(`Listening on port:http://localhost:${PORT}`);
    }
})