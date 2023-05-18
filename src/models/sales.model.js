const connection = require('./connection');

const productsSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sm.date, sp.product_id AS productId, sp.quantity 
    FROM StoreManager.sales_products  AS sp
    INNER JOIN StoreManager.sales AS sm
    ON sp.sale_id = sm.id ORDER BY sp.sale_id, productId
    `,
  );
 
  return result;
};
const productsSalesID = async (id) => {
  const [result] = await connection.execute(
    `SELECT sm.date, sp.product_id AS productId, sp.quantity 
    FROM StoreManager.sales_products  AS sp
    INNER JOIN StoreManager.sales AS sm
    ON sp.sale_id = sm.id WHERE sp.sale_id = ?`,
    [id],
  );
  return result;
};
const removeSales = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return affectedRows;
};
const updateSales = async (id, { quantity, productId }) => {
  const [{ affectedRows }] = await connection.execute(
    ' UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?;',
    [quantity, id, productId],
  );
  return affectedRows;
};

module.exports = {
  productsSales, productsSalesID, removeSales, updateSales, 
};