const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Product name cannot be smaller than 3 characters"],
    maxLength: 30,
  },

  price: {
    type: Number,
  },

  image: {
    type: String,
  },

  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "categories",
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
