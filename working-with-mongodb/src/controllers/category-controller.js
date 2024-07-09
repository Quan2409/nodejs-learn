const categoryModel = require("../models/category-model");

const categoryController = {
  showFormCreate: (req, res) => {
    res.render("category-views/add");
  },

  showFormEdit: async (req, res) => {
    let id = req.params.id;
    let categoryValue = await categoryModel.findById(id);
    console.log(categoryValue.description);
    res.render("category-views/edit", { categoryValue });
  },

  createCategory: async (req, res) => {
    var categoryValue = req.body;
    await categoryModel.create(categoryValue);
    res.redirect("/category");
  },

  readAllCategory: async (req, res) => {
    try {
      let categories = await categoryModel.find({});
      res.render("category-views/index", { categories });
    } catch (error) {
      console.error("error: " + error);
    }
  },

  updateCategory: async (req, res) => {
    try {
      let id = req.params.id;
      let newCategory = req.body;
      await categoryModel.findByIdAndUpdate(id, newCategory);
      res.redirect("/category");
    } catch (error) {
      console.error("error: " + error);
    }
  },

  deleteSingleCategory: async (req, res) => {
    try {
      let id = req.params.id;
      await categoryModel.findByIdAndDelete(id);
      res.redirect("/category");
    } catch (error) {
      console.error("error: " + error);
    }
  },
};

module.exports = categoryController;
