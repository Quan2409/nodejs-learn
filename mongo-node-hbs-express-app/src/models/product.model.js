const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
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

const productModel = new mongoose.model("products", productSchema);
module.exports = productModel;
