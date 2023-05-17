const modelProdut = require('../models/produts.model');

const product = async () => {
  const products = await modelProdut.produtos();
  return products;
};

const productId = async (id) => {
  const products = await modelProdut.productsId(id);
  return products;
};

const insertId = async (name) => {
  const createInsert = await modelProdut.insertName(name);
  return createInsert;
};

module.exports = {
  product,
  productId,
  insertId,
};
