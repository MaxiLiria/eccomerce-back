const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: String, required: true},
        image: {type: String, required: true},
        category: {type: String, required: true},
        description: {type: String, required: false}
    },{
        timestamps: true
    }
)


const Products = mongoose.model('Products', productsSchema);

module.exports = Products;