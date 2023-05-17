const serviceProdut = require('../services/produts.serves');

const product = async (_req, res) => {
  const products = await serviceProdut.product();
  if (products) {
    return res.status(200).json(products);
  } 
};

const productId = async (req, res) => {
  const products = await serviceProdut.productId(req.params.id);
  if (products !== undefined) {
    return res.status(200).json(products);
  } 
   return res.status(404).json({ message: 'Product not found' });
};
const insertId = async (req, res) => {
  const name = req.body;
  const result = await serviceProdut.insertId(name);
  console.log(result);
  return res.status(201).json(result);
};
const uptadeProdut = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const uptade = await serviceProdut.uptadeProdut(Number(id), name);
  const { type, message } = uptade;
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  product,
  productId,
  insertId,
  uptadeProdut,
  
};
