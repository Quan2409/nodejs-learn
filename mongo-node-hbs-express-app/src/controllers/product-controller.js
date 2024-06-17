const productModel = require("../models/product-model");

const productController = {
  showFormCreate: (req, res) => {
    res.send("Test Add");
  },

  createProduct: async (req, res) => {
    let productValue = req.body;
    await productModel.create(productValue);
    res.redirect("/product");
  },

  readAllProduct: async (req, res) => {
    let products = await productModel.find({}).populate("category");
    res.render("product-views/index", { products });
  },

  deleteSingleProduct: async (req, res, next) => {
    try {
      let id = req.params.id;
      await productModel.findByIdAndDelete(id);
      res.redirect("/product");
    } catch (error) {
      console.error("Something Wrong: " + error);
    }
  },
};

module.exports = productController;
