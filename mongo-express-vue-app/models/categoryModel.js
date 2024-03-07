var mongoose = require("mongoose");

// Design Table (Collection) Structure
var CategorySchema = mongoose.Schema({
  name: String,
  description: String,
});
var CategoryModel = mongoose.model("category", CategorySchema);
// Note: "category": tên bảng

module.exports = CategoryModel;
