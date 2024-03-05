const categoryModel = require("../models/categoryModel");

//build-controller
const categoryController = {
  // get all category
  handleGetRequest: async (req, res) => {
    var categoryList = await categoryModel.find({});
    res.render("category/index", { categoryList }); //views/product/index
  },

  //delete a category
  handleDeleteRequest: async (req, res) => {
    await categoryModel.findByIdAndDelete(req.params.id);
    res.redirect("/category");
  },
};

module.exports = categoryController;
