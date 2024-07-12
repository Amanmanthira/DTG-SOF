const express = require('express');
const {
    addnewitem,
    getallitems,
    getitembyid,
    updateitem,
    deleteitem
} = require('../controllers/productController');

const router = express.Router(); // Corrected line

// Add new item
router.post('/addnewitem', addnewitem);

// Get all items
router.get('/getallitems', getallitems);

// Get item by id
router.get('/getitembyid/:id', getitembyid);

// Update item
router.put('/updateitem/:id', updateitem);

// Delete item
router.delete('/deleteitem/:id', deleteitem);

module.exports = router;
