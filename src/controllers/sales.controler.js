const serviceProdut = require('../services/sales.services');

const productsSales = async (_req, res) => {
  const products = await serviceProdut.productsSales();
   console.log(products);
    return res.status(200).json(products); 
};
const productsSalesID = async (req, res) => {
  const products = await serviceProdut.productsSalesID(req.params.id);
  if (products.type) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(products);
};
module.exports = {
  productsSales,
  productsSalesID,
};
