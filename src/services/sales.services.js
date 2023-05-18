const salesProdut = require('../models/sales.model');
const validarProduto = require('../middlewares/validadeProduto');

const productsSales = async () => {
  const products = await salesProdut.productsSales();
  console.log(products, 'test');
  return products;
};
const productsSalesID = async (id) => {
  const products = await salesProdut.productsSalesID(id);
  if (products.length === 0) {
  return {
    type: 404,
    message: 'Sale not found',
  };
 }
  return products; 
};
const deleteSales = async (id) => {
  const affectedRows = await salesProdut.removeSales(id);

  if (!affectedRows) {
    return {
      type: 404,
      message: 'Sale not found',
    };
  }
  const products = await salesProdut.productsSalesID(id);
  return {
    type: null,
    message: products,
  };
};
const uptadeSales = async (id, sales) => {
  const validacao = await validarProduto(sales);
  if (validacao.length > 0) {
    return { type: 404, message: 'Product not found' }; 
  }

  const products = await productsSalesID(Number(id));
  if (products.type) {
 return { type: 404, message: 'Sale not found' }; 
} 
  await Promise.all(sales.map(async (sale) => salesProdut.updateSales(id, sale)));
  const result = {
    saleId: id, itemsUpdated: sales, 
  }; 
  return { type: null, message: result };
};
module.exports = {
  productsSales,
  productsSalesID,
  deleteSales,
  uptadeSales, 
};
