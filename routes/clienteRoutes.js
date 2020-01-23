const express = require('express');
const router = express.Router();

const Cliente = require('../controllers/clienteController');

router.post('/cadastro', Cliente.cadastro );

module.exports = router;