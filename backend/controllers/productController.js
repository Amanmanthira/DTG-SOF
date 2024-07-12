const ProductModel = require("../models/productModel");
const mongoose = require("mongoose");

//add new item
const addnewitem = async (req, res) => {
    const { jobNumber, brand, type, description, customerName, contactNumber } = req.body;
    let emptyFields = [];

    if (!jobNumber) {
        emptyFields.push("Job Number");
    }
    if (!brand) {
        emptyFields.push("Brand");
    }
    if (!type) {
        emptyFields.push("Type");
    }
    if (!description) {
        emptyFields.push("Description");
    }
    if (!customerName) {
        emptyFields.push("Customer Name");
    }
    if (!contactNumber) {
        emptyFields.push("Contact Number");
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    try {
        const product = await ProductModel.create({ jobNumber, brand, type, description, customerName, contactNumber });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getallitems = async (req, res) => {
    
        try {
            // logic to get all items
            const products = await ProductModel.find();
            res.json(products);
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ error: 'Error: ' + err });
        }
    
    
};

const getitembyid = (req, res) => {
    // logic to get item by id
};

const updateitem = (req, res) => {
    // logic to update item
};

const deleteitem = (req, res) => {
    // logic to delete item
};

module.exports = {
    addnewitem,
    getallitems,
    getitembyid,
    updateitem,
    deleteitem,
};
