const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const { verificaAcesso } = require('./utils/jwt');
const { validaJson } = require('./utils/validacao');

const usuarios = require('./routes/usuarioRoutes');
const clientes = require('./routes/clienteRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validaJson);

app.use('/usuario', usuarios);
app.use('/cliente', verificaAcesso, clientes);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error(err));

app.listen(9000, () => console.log('Aberto na porta 9000'))
