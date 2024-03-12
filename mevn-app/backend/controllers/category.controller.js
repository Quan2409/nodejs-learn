const categoryModel = require("../models/categoryModel");

const categoryController = {
  //create-category
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

  //read-category
  handleGetRequest: async (req, res) => {
    var categoryList = await categoryModel.find({});
    res.render("category/index", { categoryList }); //views/product/index
  },

  //update-category
  showEditForm: async (req, res) => {
    var oldCategory = await categoryModel.findById(req.params.id);
    res.render("category/edit", { oldCategory });
  },
  handleUpdateRequest: async (req, res) => {
    await categoryModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/category");
  },

  //delete-category
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
};

module.exports = categoryController;
