const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.index);
router.get('/cadastro', clienteController.cadastro);
router.post('/salvar', clienteController.salvar);
router.get('/buscacliente', clienteController.buscar);
router.get('/editar/:id', clienteController.editar);
router.post('/atualizar/:id', clienteController.atualizar);
router.get('/excluir/:id', clienteController.excluir);

module.exports = router;