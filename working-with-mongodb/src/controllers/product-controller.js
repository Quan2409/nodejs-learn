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

  showFormEdit: async (req, res) => {
    let id = req.params.id;
    let categoryList = await categoryModel.find({});
    let productValue = await productModel.findById(id);
    res.render("product-views/edit", { productValue, categoryList });
  },

  updateProduct: async (req, res) => {
    try {
      let id = req.params.id;
      let newProduct = req.body;
      await productModel.findByIdAndUpdate(id, newProduct);
      res.redirect("/product");
    } catch (error) {
      console.error("error: " + error);
    }
  },

  deleteSingleProduct: async (req, res) => {
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
