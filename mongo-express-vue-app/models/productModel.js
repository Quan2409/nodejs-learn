var mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
  name: {
    type: String,
    // validation
    minLength: [3, "Product name can not be smaller than 3 characters"],
    maxLength: 30,
  },
  price: Number,
  image: String,
  category: {
    //column of reference filed (Fk)
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category", //referenced table
  },
});
var ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
