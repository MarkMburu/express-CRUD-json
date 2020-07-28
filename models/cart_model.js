const mongoose = require('mongoose');

const { Schema } = mongoose;
// isbn, title, authors, publisher, year, pages
const CartSchema = new Schema({
  cartId: { type: String, required: true },
  sku: { type: String, required: true },
  nUnits: { type: Number, required: true },
}, {
  timestamps: true,
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;