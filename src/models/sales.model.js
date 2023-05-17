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

module.exports = {
  productsSales, productsSalesID, 
};