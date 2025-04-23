const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: undefined
  },
  price: {
    type: Number,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  imageId: {
    type: String,
    default: undefined
  },
  quantity: {
    type: Number,
    default: undefined
  },
  ratings: {
    rating: {
      type: String,
      default: "0",
    },
    ratingCount: {
      type: String,
      default: "0",
    },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
