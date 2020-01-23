const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuarioController');

router.post('/cadastro', Usuario.cadastro);
router.post('/login', Usuario.login);

module.exports = router;