const CategoryModel = require("../models/categoryModel");
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
    try {
      // notes: "req.params.id" =. get value from URL
      await categoryModel.findByIdAndDelete(req.params.id);
      res.redirect("/category");
    } catch {
      console.error("Error in handleDeleteRequest:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  //show new category form
  showAddForm: async (req, res) => {
    res.render("category/add");
  },
  handlePostRequest: async (req, res) => {
    try {
      //notes: req.body => get value form Form
      await categoryModel.create(req.body);
      res.redirect("/category");
    } catch {
      console.error("Error in handlePostRequest:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  //edit category
  showEditForm: async (req, res) => {
    var oldCategory = await categoryModel.findById(req.params.id);
    res.render("category/edit", { oldCategory });
  },
  handleUpdateRequest: async (req, res) => {
    await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/category");
  },
};

module.exports = categoryController;
