const productModel = require("../models/productModel");

//build-controller
const productController = {
  // get all product
  handleGetRequest: async (req, res) => {
    var productList = await productModel.find({}).populate("category");
    res.render("product/index", { productList });
  },

  handleDeleteRequest: async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.redirect("/product");
  },
};

module.exports = productController;
