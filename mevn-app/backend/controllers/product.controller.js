const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");

const productController = {
  //create-product
  showAddForm: async (req, res) => {
    var categoryList = await categoryModel.find({});
    res.render("product/add", { categoryList });
  },
  handlePostRequest: async (req, res) => {
    var product = req.body;
    try {
      await productModel.create(product);
      res.redirect("/product");
    } catch (err) {
      if (err.name === "ValidationError") {
        let inputErrors = {};
        for (let field in err.errors) {
          inputErrors[field] = err.errors[field].message;
        }
        res.render("product/add", { inputErrors, product });
      }
    }
  },

  //read-product
  handleGetRequest: async (req, res) => {
    var productList = await productModel.find({}).populate("category");
    //apply new layout with syntax: {layout: new layout in views folder}
    res.render("product/index", { productList });
  },

  //update-product
  showEditForm: async (req, res) => {
    var categoryList = await categoryModel.find({});
    var oldProduct = await productModel.findById(req.params.id);
    res.render("product/edit", { oldProduct, categoryList });
  },
  handleUpdateRequest: async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/product");
  },

  //delete-product
  handleDeleteRequest: async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.redirect("/product");
  },

  //search-product
  handleSearchRequest: async (req, res) => {
    var productList = await productModel.find({
      name: new RegExp(req.body.keyword, "i"),
    });
    res.render("product/index", { productList });
  },

  //sort-product-asc
  handleSortAscRequest: async (req, res) => {
    var productList = await productModel.find().sort({ name: 1 });
    res.render("product/index", { productList });
  },

  //sort-product-desc
  handleSortDescRequest: async (req, res) => {
    var productList = await productModel.find().sort({ name: -1 });
    res.render("product/index", { productList });
  },
};

module.exports = productController;