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

const insertName = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    ' INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
   return insertId;
};
const updateProdutId = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    ' UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [name, id],
  ); 
  console.log(affectedRows);
  return affectedRows;
};
 
module.exports = { produtos, productsId, insertName, updateProdutId };
