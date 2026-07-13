const Product = require("../models/Product");

exports.getAllProducts = async () => {
  return await Product.find();
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.createProduct = async (product) => {
  return await Product.create(product);
};

exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};