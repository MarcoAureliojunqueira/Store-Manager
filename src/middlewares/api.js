const express = require('express');
const connection = require('../models/connection');

const app = express();
app.use(express.json());

const chamadadeProdutos = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ',
  );
  return result;
};
const productsId = async (id) => {
const [result] = await connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ? ',
  [id],
);
return result;
};

module.exports = { chamadadeProdutos, productsId };