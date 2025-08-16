const express = require('express');
const clienteController = require('../controllers/clienteController');

const api = express.Router();



api.get('/testing', clienteController.testing);


/**
 * ESTE MÉTODO NO SE RECOMIENDA:
 */
// api.get('/testing', function (req, res) {
//     res.status(200).send({ data: 'Testing works 2'})
// });

module.exports = api;