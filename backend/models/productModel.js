const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    date:{
        type:String,
        required:true
    },
    jobNumber: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Product', productSchema);
