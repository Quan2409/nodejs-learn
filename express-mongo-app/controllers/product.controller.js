const CategoryModel = require("../models/categoryModel");
const ProductModel = require("../models/productModel");
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

  //show new product form
  showAddForm: async (req, res) => {
    var categoryList = await CategoryModel.find({});
    res.render("product/add", { categoryList });
  },
  handlePostRequest: async (req, res) => {
    await productModel.create(req.body);
    res.redirect("/product");
  },

  //edit product
  showEditForm: async (req, res) => {
    var categoryList = await CategoryModel.find({});
    var oldProduct = await productModel.findById(req.params.id);
    res.render("product/edit", { oldProduct, categoryList });
  },
  handleUpdateRequest: async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/product");
  },
};

module.exports = productController;
