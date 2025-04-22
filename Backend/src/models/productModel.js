const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    brandName: {
      type: String,
      required: true,
    },
    brandImageId: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
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
