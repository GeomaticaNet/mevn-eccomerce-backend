const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const authenticate = require('../middlewares/authenticate');

const api = express.Router();

api.post('/registro_usuario_admin', authenticate.decodeToken, usuarioController.registro_usuario_admin);
api.post('/login_usuario', usuarioController.login_usuario);


api.get('/listar_usuario_admin/:filtro?', authenticate.decodeToken, usuarioController.listar_usuario_admin);
api.get('/obtener_usuario_admin/:id?', authenticate.decodeToken, usuarioController.obtener_usuario_admin);
api.put('/actualizar_usuario_admin/:id', authenticate.decodeToken, usuarioController.actualizar_usuario_admin);
api.put('/cambiar_estado_usuario_admin/:id', authenticate.decodeToken, usuarioController.cambiar_estado_usuario_admin);


module.exports = api;