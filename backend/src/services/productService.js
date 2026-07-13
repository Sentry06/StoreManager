const productRepository = require("../repositories/productRepository");

exports.getAllProducts = async () => {
  return await productRepository.getAllProducts();
};

exports.getProductById = async (id) => {
  return await productRepository.getProductById(id);
};

exports.createProduct = async (product) => {
  return await productRepository.createProduct(product);
};

exports.updateProduct = async (id, product) => {
  return await productRepository.updateProduct(id, product);
};

exports.deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id);
};