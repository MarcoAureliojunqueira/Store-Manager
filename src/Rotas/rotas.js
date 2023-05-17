const express = require('express');
const controlerProduts = require('../controllers/produts.controler');

const rotas = express.Router();

rotas.get('/products', controlerProduts.product);
rotas.get('/products/:id', controlerProduts.productId);
 
module.exports = rotas;
