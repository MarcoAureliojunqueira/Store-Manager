const express = require('express');
const controlerProduts = require('../controllers/produts.controler');
const controlerSales = require('../controllers/sales.controler');
const validName = require('../middlewares/validacaoName');

const rotas = express.Router();

rotas.get('/products', controlerProduts.product);
rotas.get('/products/:id', controlerProduts.productId);

rotas.post('/products', validName, controlerProduts.insertId);
rotas.get('/sales', controlerSales.productsSales);
rotas.get('/sales/:id', controlerSales.productsSalesID);

rotas.put('/products/:id', validName, controlerProduts.uptadeProdut);
module.exports = rotas;
