const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },

  description: {
    type: String,
  },
});

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;
