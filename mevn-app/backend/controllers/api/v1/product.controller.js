const productModel = require("../../../models/productModel");

const productController = {
  handleGetRequest: async (req, res) => {
    try {
      var products = await productModel.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(400).send("Load List Fail" + err);
    }
  },

  handleGetAProduct: async (req, res) => {
    try {
      var product = await productModel.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(400).send("Product not Found");
      }
    } catch (err) {
      res.status(400).send("Load Product Fail" + err);
    }
  },

  handleDeleteProduct: async (req, res) => {
    try {
      var product = await productModel.findById(req.params.id);
      if (product) {
        await productModel.deleteOne(product);
        res.status(200).send("Delete Product Succeed");
      } else {
        res.status(400).send("Product not Found");
      }
    } catch (err) {
      res.status(400).send("Delete Product Fail" + err);
    }
  },

  handlePostRequest: async (req, res) => {
    try {
      var product = req.body;
      await productModel.create(product);
      res.status(201).send("Create Product Succsed");
    } catch (err) {
      res.status(400).send("Add Product Fail" + err);
    }
  },

  handleEditRequest: async (req, res) => {
    try {
      var id = req.params.id;
      var product = req.body;
      await productModel.findByIdAndUpdate(id, product);
      res.status(201).send("Edit Product Succsed");
    } catch (err) {
      res.status(400).send("Edit Product Fail" + err);
    }
  },
};

module.exports = productController;
