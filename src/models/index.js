const { produtos, productsId,
  insertName, updateProdutId, removeId, productsName } = require('./produts.model');
const { productsSales, productsSalesID } = require('./sales.model');

module.exports = {
  produtos,
  productsId,
  insertName,
  productsSales,
  productsSalesID,
  updateProdutId,
  removeId,
  productsName,
};
