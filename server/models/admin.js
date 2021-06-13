const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = mongoose.Schema({
   
    make: {
        type: String,
        maxlength: 50
    },
   
    city: {
        type: String,
        maxlength:50,
    },
    name: {
        type: String,
        maxlength:50,
    },
    email: {
        type: String,
        maxlength:50,
    },
   
    number: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

// db.stores.createIndex( { name: "text", description: "text" } )






const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Admin }