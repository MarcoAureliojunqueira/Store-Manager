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
const removeProdut = async (req, res) => {
  const { id } = req.params;
  const remove = await serviceProdut.deleteProdut(Number(id));
  const { type, message } = remove;
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};
const productName = async (req, res) => {
  const { q } = req.query;
  if (q === '') {
    const all = await serviceProdut.product();
    return res.status(200).json(all);
  }
  const products = await serviceProdut.productName(q);
  const { type, message } = products;
console.log(q);
  if (type) return res.status(404).json({ message });
  return res.status(200).json([message]);
};
module.exports = {
  product,
  productId,
  insertId,
  uptadeProdut,
  removeProdut,
  productName,
  
};
