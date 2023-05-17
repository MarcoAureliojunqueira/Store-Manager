const express = require('express');
const controlerProduts = require('../controllers/produts.controler');
const validName = require('../middlewares/validacaoName');

const rotas = express.Router();

rotas.get('/products', controlerProduts.product);
rotas.get('/products/:id', controlerProduts.productId);

rotas.post('/products', validName, controlerProduts.insertId);

module.exports = rotas;
