const salesProdut = require('../models/produts.model');

const validProdut = async (sale) => {
  const erro = [];
  await Promise.all(sale.map(async ({ productId }) => {
    const produts = await salesProdut.productsId(productId);
    if (produts === undefined) {
      erro.push('err');
    } 
    console.log(produts);
  }));
  
  return erro;
};
module.exports = validProdut;
