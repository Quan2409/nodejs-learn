const productModel = require("../models/product-model");
const categoryModel = require("../models/category-model");

const productController = {
  showFormCreate: async (req, res) => {
    let categoryList = await categoryModel.find({});
    res.render("product-views/add", { categoryList });
  },

  showFormEdit: async (req, res) => {
    let id = req.params.id;
    let categoryList = await categoryModel.find({});
    let productValue = await productModel.findById(id);
    res.render("product-views/edit", { productValue, categoryList });
  },

  createProduct: async (req, res) => {
    try {
      let productValue = req.body;
      await productModel.create(productValue);
      res.redirect("/product");
    } catch (error) {
      console.error(error);
    }
  },

  readAllProduct: async (req, res) => {
    let products = await productModel.find({}).populate("category");
    res.render("product-views/index", { products });
  },

  updateProduct: async (req, res) => {
    try {
      let id = req.params.id;
      let newProduct = req.body;
      await productModel.findByIdAndUpdate(id, newProduct);
      res.redirect("/product");
    } catch (error) {
      console.error(error);
    }
  },

  deleteSingleProduct: async (req, res) => {
    try {
      let id = req.params.id;
      await productModel.findByIdAndDelete(id);
      res.redirect("/product");
    } catch (error) {
      console.error(error);
    }
  },

  searchProduct: async (req, res) => {
    try {
      let keyword = req.body.keyword;
      let products = await productModel
        .find({
          name: new RegExp(keyword, "i"),
        })
        .populate("category");

      if (products.length === 0) {
        return res.render("product-views/index", {
          message: "Product Not Found",
        });
      }
      res.render("product-views/index", { products });
    } catch (error) {
      console.error(error);
    }
  },

  sortAsc: async (req, res) => {
    try {
      let products = await productModel
        .find()
        .sort({ name: 1 })
        .populate("category");
      res.render("product-views/index", { products });
    } catch (error) {
      console.error(error);
    }
  },

  sortDesc: async (req, res) => {
    try {
      let products = await productModel
        .find()
        .sort({ name: -1 })
        .populate("category");
      res.render("product-views/index", { products });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = productController;
