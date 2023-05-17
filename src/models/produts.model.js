const connection = require('./connection');

const produtos = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ',
  );
  return result;
};
const productsId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ',
    [id],
  );
  return result;
};
 
module.exports = { produtos, productsId };
