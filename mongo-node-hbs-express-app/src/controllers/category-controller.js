const categoryModel = require("../models/category-model");

const categoryController = {
  createCategory: async (req, res, next) => {
    res.send("Test Add");
  },

  readAllCategory: async (req, res, next) => {
    try {
      let categories = await categoryModel.find({});
      res.render("category-views/index", { categories });
    } catch (error) {
      console.error("Something Wrong: " + error);
    }
  },
};

module.exports = categoryController;
