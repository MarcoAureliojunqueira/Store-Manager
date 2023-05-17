const express = require('express');
const controlerProduts = require('../controllers/produts.controler');

const rotas = express.Router();

rotas.get('/products', controlerProduts.product);
rotas.get('/products/:id', controlerProduts.productId);
 rotas.post('/products:id', controlerProduts.insertId);
module.exports = rotas;
