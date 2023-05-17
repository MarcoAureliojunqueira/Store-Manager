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

 const insertName = async (name) => {
  const [{ insertId }] = await connection.execute(
    ' INSERT INTO StoreManager.products (name) VALUES (?)', [name],
);
    
   return { id: insertId, name };
  };
module.exports = { produtos, productsId, insertName };
