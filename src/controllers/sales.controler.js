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

const removeSales = async (req, res) => {
  const { id } = req.params;
  const remove = await serviceProdut.deleteSales(Number(id));
  const { type, message } = remove;
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};
const uptadeSale = async (req, res) => {
  const sales = req.body;
  const { id } = req.params;
  const uptade = await serviceProdut.uptadeSales(id, sales);
  const { type, message } = uptade;
  if (type) return res.status(type).json({ message });
  console.log(message);
  return res.status(200).json(message);
};
module.exports = {
  productsSales,
  productsSalesID,
  removeSales,
  uptadeSale,
};
