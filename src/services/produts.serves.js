const modelProdut = require('../models/produts.model');

const product = async () => {
  const products = await modelProdut.produtos();
  return products;
};

const productId = async (id) => {
  const products = await modelProdut.productsId(id);
  return products;
};

const insertId = async (newProdut) => {
  const createInsert = await modelProdut.insertName(newProdut);
  return { id: createInsert, name: newProdut.name };
};

module.exports = {
  product,
  productId,
  insertId,
};
