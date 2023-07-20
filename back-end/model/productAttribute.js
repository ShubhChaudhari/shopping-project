const mongoose = require("mongoose");

const productAttributeSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    productSize: { type: String, required: true },
    productColor: { type: String, required: true },
});


const ProductAttribute = mongoose.model('ProductAttribute', productAttributeSchema);

module.exports = ProductAttribute;