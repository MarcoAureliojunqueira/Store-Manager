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
// const productsSales = async () => {
 // const products = await modelProdut.//productsSales();
  // return products;
// };
// const productsSalesID = async (id) => {
 // const products = await modelProdut.productsId(id);
 
 // return products;
// };
const uptadeProdut = async (id, name) => {
  const affectedRows = await modelProdut.updateProdutId(id, name);
  
  if (!affectedRows) {
    return {
      type: 404,
      message: 'Product not found',
    };
  }
  console.log(affectedRows, 'test');
  const products = await modelProdut.productsId(id);
  return {
    type: null,
    message: products,
  };
};
const deleteProdut = async (id) => {
  const affectedRows = await modelProdut.removeId(id);

  if (!affectedRows) {
    return {
      type: 404,
      message: 'Product not found',
    };
  }
  const products = await modelProdut.productsId(id);
  return {
    type: null,
    message: products,
  };
};

const productName = async (name) => {
  const products = await modelProdut.productsName(name);
  if (!products) {
 return {
    type: 404,
    message: 'Product not found',
    }; 
}
  return {
    type: null,
    message: products,
  };
};

module.exports = {
  product,
  productId,
  insertId,
 // productsSales,
 // productsSalesID,
  uptadeProdut,
  deleteProdut,
  productName,
};
