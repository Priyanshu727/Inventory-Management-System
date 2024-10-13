# Inventory Management System

## Overview

This project is a backend system for managing inventory data, handling suppliers, and bulk data operations. It includes the following features:

- CRUD operations for inventory management
- Supplier management linked with inventory items
- CSV import/export for bulk data operations
- Low stock alert system

## Folder Structure
backend/ │ ├── controllers/ # Contains all controller logic │ └── inventoryController.js │ └── supplierController.js │ ├── models/ # Mongoose models for inventory and supplier │ └── inventoryModel.js │ └── supplierModel.js │ ├── routes/ # API routes for inventory and supplier management │ └── inventoryRoutes.js │ └── supplierRoutes.js │ ├── uploads/ # Directory for uploaded CSV files │ ├── server.js # Main server file └── package.json # Project metadata and dependencies

## Requirements
- Node.js
- MongoDB
- Express
## The server will run on http://localhost:8084.

## API Endpoints
Inventory Management
Add Inventory Item
POST /api/inventory/add
 
Get All Inventory Items
GET /api/inventory

Check Low Stock Items
GET /api/inventory/low-stock

Bulk Import Inventory from CSV
POST /api/inventory/bulk-import

Upload a CSV file with the required fields.

Export Inventory Data to CSV
GET /api/inventory/export

Supplier Management
Add Supplier
POST /api/supplier/add

Get All Suppliers
GET /api/supplier
![Screenshot 2024-10-13 050335](https://github.com/user-attachments/assets/36abe478-0d5d-4fbf-a4ae-ca08a85770b9)

![Screenshot 2024-10-13 050401](https://github.com/user-attachments/assets/71fdf095-0542-4e58-9036-44823aaebdc2)


   
![Screenshot 2024-10-13 050546](https://github.com/user-attachments/assets/f4225867-4ebf-4a9c-b36a-8f0906a5322a)


![Screenshot 2024-10-13 050618](https://github.com/user-attachments/assets/fd8ca186-aaba-4abb-b488-2f305105697e)


![Screenshot 2024-10-13 050714](https://github.com/user-attachments/assets/9f697075-8b83-4858-9c92-41a0761a94fd)

![Screenshot 2024-10-13 051200](https://github.com/user-attachments/assets/7bd3fe85-2b75-46a2-8cdd-1100b3659fea)

![Screenshot 2024-10-13 052629](https://github.com/user-attachments/assets/85dee23d-ec34-484d-aac3-3b87c49dda59)



This `README.md` provides all necessary information to set up, run, and test your backend project, along with details of each API endpoint. Let me know if you'd like to modify anything!

