const productModel = require("../models/product-model");
const categoryModel = require("../models/category-model");

const productController = {
  showFormCreate: async (req, res) => {
    let categoryList = await categoryModel.find({});
    res.render("product-views/add", { categoryList });
  },

  createProduct: async (req, res) => {
    try {
      let productValue = req.body;
      await productModel.create(productValue);
      res.redirect("/product");
    } catch (error) {
      console.error("error: " + error);
    }
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
      console.error("error: " + error);
    }
  },
};

module.exports = productController;
