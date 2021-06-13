const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    make: {
        type: String,
        maxlength: 50
    },
    condition: {
        type:Schema.Types.Mixed,
        maxlength: 50
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength:50,
    },
    city: {
        type: String,
        
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    name: {
        type: String,
        maxlength:50,
    },
   
    number: {
        type: Number,
        default: 0
    },
    optionaln: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

// db.stores.createIndex( { name: "text", description: "text" } )




productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        title: 5,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }