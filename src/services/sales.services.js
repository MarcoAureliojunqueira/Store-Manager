const salesProdut = require('../models/sales.model');

const productsSales = async () => {
  const products = await salesProdut.productsSales();
  return products;
};
const productsSalesID = async (id) => {
  const products = await salesProdut.productsSalesID(id);
  if (products.length === 0) {
  return {
    type: 404,
  //  message: 'Sale not found',
  };
 }
  return products; 
};

module.exports = {
  productsSales,
  productsSalesID,
};
